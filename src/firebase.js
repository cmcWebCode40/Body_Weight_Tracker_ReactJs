import * as firebase from "firebase/app";
import "firebase/auth";
import "dotenv";
// require('dotenv').config()

// console.log(process.env.REACT_APP_FIREBASE_KEY);

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

// REACT_APP_FIREBASE_KEY = "AIzaSyB-N_eRslkX11GRbyRQC2l__s55SICeVZw"
// REACT_APP_FIREBASE_DOMAIN = "bodyweight-auth.firebaseapp.com"
// REACT_APP_FIREBASE_DATABASE = "https://bodyweight-auth.firebaseio.com"
// REACT_APP_FIREBASE_PROJECT_ID = "bodyweight-auth"
// REACT_APP_FIREBASE_STORAGE_BUCKET = "bodyweight-auth.appspot.com"
// REACT_APP_FIREBASE_SENDER_ID = "123290265097"
// REACT_APP_FIREBASE_APP_ID = "1:123290265097:web:5dbf3c13647672b8573ad8"
// REACT_APP_FIREBASE_MEASUREMENT_ID = "G-89PT0H1K2F"

export default app;
