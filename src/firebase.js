import *  as firebase from 'firebase/app';
import 'firebase/auth';
import 'dotenv';
// require('dotenv').config()

console.log(process.env.REACT_APP_FIREBASE_KEY);



const app = firebase.initializeApp({
     apiKey: "AIzaSyB-N_eRslkX11GRbyRQC2l__s55SICeVZw",
     authDomain: "bodyweight-auth.firebaseapp.com",
     databaseURL: "https://bodyweight-auth.firebaseio.com",
     projectId: "bodyweight-auth",
     storageBucket: "bodyweight-auth.appspot.com",
     messagingSenderId: "123290265097",
     appId: "1:123290265097:web:5dbf3c13647672b8573ad8",
     measurementId: "G-89PT0H1K2F",
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






