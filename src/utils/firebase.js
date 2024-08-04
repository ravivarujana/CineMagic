// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7MQHCUPQ6O4lq4iHSW5gDkFMpJTVcZ9I",
  authDomain: "cinemagic-a84d7.firebaseapp.com",
  projectId: "cinemagic-a84d7",
  storageBucket: "cinemagic-a84d7.appspot.com",
  messagingSenderId: "568176001594",
  appId: "1:568176001594:web:e6cd0babeb6277efc2ab03",
  measurementId: "G-Z439EVLCNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
