import *  as firebase from 'firebase/app';
// import 'firebase/firestore';
import 'firebase/auth';
// import { resolve } from 'url';



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

// const fireBaseApp = firebase.initializeApp(config);

export default app;







// class Firebase {
//      constructor() {
//           app.initializeApp(fireBaseConfig);
//           this.auth = app.auth();
//           this.db = app.firestore();
//      }

//      login(email, password) {
//           return this.auth.signInWithEmailAndPassWord(email, password);
//      }

//      logout() {
//           return this.auth.signOut();
//      }

//      async register(name, email, password) {
//           await this.auth.createUserWithEmailAndPassword(email, password)
//           return this.auth.currentUser.updateProfile({
//                displayName: name,
//           })
//      }

//      addQuote(code) {
//           if (!this.auth.currentUser) {
//                return alert('Not authorized');
//           }

//           return this.db.doc(`users_codedamn_video/${this.currentUser.uid}`).set({
//                code
//           })
//      }

//      isInitialized() {
//           return new Promise(resolve => {
//                this.auth.onAuthStateChanged(resolve);
//           })
//      }

//      getCurrentUsername() {
//           return this.auth.currentUser && this.auth.currentUser.displayName
//      }

//      async  getCurrentUserQuote() {
//           const code = await this.db.doc(`users_codedamn_vidoe/${this.auth.currentUser.uid}`).get();
//           return code.get('quote');
//      }

// }

// export default new Firebase();