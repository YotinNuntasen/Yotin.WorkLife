// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoN2yU0erLn3riBR00uu5c4YXn0alcsLU",
    authDomain: "knowsharenote-15812.firebaseapp.com",
    projectId: "knowsharenote-15812",
    storageBucket: "knowsharenote-15812.appspot.com",
    messagingSenderId: "547675767532",
    appId: "1:547675767532:web:254bf36b79ecc921e29bc9",
    measurementId: "G-V0S1MP4RXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
export { auth, provider };
