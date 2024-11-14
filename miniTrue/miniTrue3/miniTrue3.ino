//include 
#include <SPI.h>
#include <Wire.h>
#include <WiFi.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>
#include <Adafruit_BMP280.h>
#include "DHT.h"
#include <WiFiClientSecure.h>
#include <NTPClient.h>
// #include "time.h"
#include <ESP_Google_Sheet_Client.h>
#include "ESP32TimerInterrupt.h"

// Constants and definitions
#define DHTPIN 23    // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11   
#define SDA_PIN 21
#define SCL_PIN 22
#define i2c_Address 0x3C // Initialize with the I2C addr 0x3C (Typically eBay OLED's)
#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define OLED_RESET -1   // QT-PY / XIAO
#define WIFI_SSID "bast"
#define WIFI_PASSWORD "11111112"
#define ON_Board_LED 2  // Onboard LED for indicators
#define SW_PIN 18

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

static bool SW_Flag = false;
static unsigned long lastPress = 0; // For debouncing
bool showFirstData = true; // State variable to toggle between data

void IRAM_ATTR SW_Press(){
  // Debounce check
  unsigned long currentMillis = millis();
  if (currentMillis - lastPress > 200) { // 200ms debounce delay
    SW_Flag = true;
    lastPress = currentMillis;
  }
}

String classifyHumidity(int humidity) {
    if (humidity < 30)
        return "Low";
    else if (humidity >= 30 && humidity <= 60)
        return "Good";
    else
        return "High";
}

String classifyTemperature(int temperature) {
    if (temperature < 20)
        return "Low";
    else if (temperature >= 20 && temperature <= 30)
        return "Good";
    else
        return "High";
}

String classifyPressure(int pressure) {
    if (pressure < 1000)
        return "Low";
    else if (pressure >= 1000 && pressure <= 1020)
        return "Good";
    else
        return "High";
}

void setup() {
  pinMode(SW_PIN, INPUT_PULLUP);

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

  if (!bmp.begin(0x76)) {   // I2C address for BMP280 on GY-91 is 0x76
    myPrint("BMP280 init failed!");
    while (0);
  } else {
    myPrint("BMP280 initialized!");
  }

  // Wi-Fi connection process
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  pinMode(ON_Board_LED, OUTPUT);
  digitalWrite(ON_Board_LED, HIGH); // LED off when connecting

  Serial.printf("WiFi connecting to %s\n", WIFI_SSID);
  myPrint("WiFi connecting... Please Wait");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(400);
    digitalWrite(ON_Board_LED, LOW);
    delay(250);
    digitalWrite(ON_Board_LED, HIGH);
  }

  Serial.printf("\nWiFi connected\nIP : ");
  myPrint("\nWiFi connected\nIP : ");
  Serial.println(WiFi.localIP());
  client.setInsecure(); // Disable SSL verification for testing

  attachInterrupt(digitalPinToInterrupt(SW_PIN), SW_Press, FALLING);
}

void loop() {
  // Read humidity, temperature, and pressure from DHT11 and BMP280
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float p = bmp.readPressure() / 100.0F; // Convert to hPa

  if (!isnan(h) && !isnan(t)) {
     sendData(h, t, p);
    // Check if the switch has been pressed (SW_Flag set by interrupt)
    if (SW_Flag) {
      SW_Flag = false; // Reset flag after handling

      // Toggle the display state
      showFirstData = !showFirstData;
      Serial.println("Button Press Detected. Toggling Display.");
    }

    // Toggle between two display states
    String displayMessage;
    if (showFirstData) {
      displayMessage = "Humidity: " + classifyHumidity(h) + "\nTemp: " + classifyTemperature(t) + "\nPressure: " + classifyPressure(p);
    } else {
      displayMessage = "Humidity: " + String(h) + "%\nTemp: " + String(t) + "C\nPressure: " + String(p) + " hPa";
    }

    // Update the OLED display
    display.clearDisplay();
    display.setCursor(0, 0);
    display.setTextSize(1);
    display.setTextColor(SH110X_WHITE);
    display.println(displayMessage);
    display.display();
  } else {
    myPrint("Failed to read from sensors!");
  } 

  delay(5000); // Update every second
}

void sendData(float h, float t, float p) {
  Serial.println("==========");
  Serial.print("connecting to ");
  Serial.println(host);

  if (!client.connect(host, httpsPort)) {
    Serial.println("connection failed");
    return;
  }

  client.setTimeout(1000);  // Wait up to 10 seconds for a response

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
    Serial.println("Data transmission failed");
  } else {
    Serial.println("Data sent successfully!");
  }

  Serial.print("reply was: ");
  Serial.println(line);
  Serial.println("closing connection");
  client.stop();
  Serial.println("==========");
}  

void myPrint(String dhtReadings) {
  display.setTextSize(1);
  display.setTextColor(SH110X_WHITE);
  display.clearDisplay();
  display.setCursor(0, 0);
  Serial.println(dhtReadings);
  // display.println(dhtReadings);
  display.display();
}
