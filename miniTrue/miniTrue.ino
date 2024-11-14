#include <SPI.h>
#include <Wire.h>
#include <WiFi.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>
#include <Adafruit_BMP280.h>
#include "DHT.h"
#include <WiFiClientSecure.h>
#include <NTPClient.h>
#include "time.h"
#include <ESP_Google_Sheet_Client.h>

// Constants and definitions
#define DHTPIN 23    // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11   
#define SDA_PIN 21
#define SCL_PIN 22
#define i2c_Address 0x3C // Initialize with the I2C addr 0x3C (Typically eBay OLED's)
#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define OLED_RESET -1   // QT-PY / XIAO
#define WIFI_SSID "nuinui"
#define WIFI_PASSWORD "kku98765"
#define ON_Board_LED 2  // Onboard LED for indicators

// Google Project ID and Service Account
#define PROJECT_ID "air-life-438007"
#define CLIENT_EMAIL "datalogging@air-life-438007.iam.gserviceaccount.com"
const char PRIVATE_KEY[] PROGMEM = "-----BEGIN PRIVATE KEY-----\ REPLACE_WITH_YOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n";
const char spreadsheetId[] = "1hstcHmmRC171NnovkngK0EhzK-O3K_4vmhxDNDXArP8";
const char* host = "script.google.com"; 
const int httpsPort = 443;
const String GAS_ID = "https://script.google.com/macros/s/AKfycbw2S4YviWdGpmArwQUICsXZQNZ-4PB9JcYHJHhf9vz7Qb8ZCnCZ71kkKlUrEyIOkVNJ0A/exec"; 

// DHT11 instance
DHT dht(DHTPIN, DHTTYPE);
// SH1106 OLED display instance
Adafruit_SH1106G display = Adafruit_SH1106G(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
// BMP280 instance (GY-91)
Adafruit_BMP280 bmp;

// WiFiClientSecure object for HTTPS connections
WiFiClientSecure client;

void setup() {
  Serial.begin(115200);
  delay(500); // Wait for the OLED to power up
  Wire.begin(21, 22);
  delay(3000);

  display.begin(i2c_Address, true); // Address 0x3C default
  display.clearDisplay();
  display.display();
  myPrint("Starting...");

  dht.begin();
  bmp.begin();

  }

  // Wi-Fi connection process
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  pinMode(ON_Board_LED, OUTPUT);
  digitalWrite(ON_Board_LED, HIGH); // LED off when connecting

  Serial.printf("WiFi connecting to %s\n", WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(400);
    digitalWrite(ON_Board_LED, LOW);
    delay(250);
    digitalWrite(ON_Board_LED, HIGH);
  }

  Serial.printf("\nWiFi connected\nIP : ");
  Serial.println(WiFi.localIP());
  client.setInsecure(); // Disable SSL verification for testing
  
  if (!bmp.begin(0x76)) {   // I2C address for BMP280 on GY-91 is 0x76
    myPrint("BMP280 init failed!");
    while (0);
  } else {
    myPrint("BMP280 initialized!");
}

void loop() {
  // Read humidity and temperature and Pressure from DHT11 and BMP280
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float p = bmp.readPressure() / 100.0F; // Convert to hPa

  if (!isnan(h) && !isnan(t)) {
    String dhtReadings = "Humidity: " + String(h) + "%" + "\n====================" + "\nTemp: " + String(t) + "C" + "\n====================" + "\npressure: " + String(p) + " hPa";
    myPrint(dhtReadings);

    // Send data to Google Sheets
    sendData(h, t, p);
  } else {
    myPrint("Failed to read from DHT sensor!");
  }

  delay(10000); // Wait before next update
}

void sendData(float h, float t, float p) {
  Serial.println("==========");
  Serial.print("connecting to ");
  Serial.println(host);

  if (!client.connect(host, httpsPort)) {
    Serial.println("connection failed");
    return;
  }

  client.setTimeout(100);  // Wait up to 10 seconds for a response

  // Construct the URL for Google Apps Script
  String url = GAS_ID + "?humi=" + String(h) + "&temp=" + String(t) + "&press=" + String(p);
  Serial.print("requesting URL: ");
  Serial.println(url);

  client.print(String("GET ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" +
               "User-Agent: ESP32\r\n" +
               "Connection: close\r\n\r\n");

  Serial.println("request sent");

  while (client.connected()) {
    String line = client.readStringUntil('\n');
    if (line == "\r") {
      Serial.println("headers received");
      break;
    }
  }

  String line = client.readStringUntil('\n');
  if (line.startsWith("{\"state\":\"success\"")) {
    Serial.println("Data sent successfully!");
  } else {
    Serial.println("Data transmission failed");
  }

  Serial.print("reply was: ");
  Serial.println(line);
  Serial.println("closing connection");
  // client.stop();
  Serial.println("==========");
}

void myPrint(String dhtReadings) {
  display.setTextSize(1);
  display.setTextColor(SH110X_WHITE);
  display.clearDisplay();
  display.setCursor(0, 0);
  Serial.println(dhtReadings);
  display.println(dhtReadings);
  display.display();
}
