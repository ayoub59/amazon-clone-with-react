// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCn430jxuC7Rohh-vjTo3Sbpn53zdWrYJ8",
    authDomain: "clone-f2119.firebaseapp.com",
    projectId: "clone-f2119",
    storageBucket: "clone-f2119.appspot.com",
    messagingSenderId: "637169796564",
    appId: "1:637169796564:web:6e651bb463b45b31abc241",
    measurementId: "G-X2TWKQ3972"
});

const db = firebase.firestore();
const auth = firebase.auth();
const providor = new firebase.auth.GoogleAuthProvider();
export { auth, db, providor }