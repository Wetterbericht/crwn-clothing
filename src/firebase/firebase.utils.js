import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC2fbaVpFbr4E23bji9nJ2_1N1K1Kpcb5A",
    authDomain: "crwn-db-89ac9.firebaseapp.com",
    databaseURL: "https://crwn-db-89ac9.firebaseio.com",
    projectId: "crwn-db-89ac9",
    storageBucket: "crwn-db-89ac9.appspot.com",
    messagingSenderId: "474992553817",
    appId: "1:474992553817:web:2e8b5a5072103e4f986648",
    measurementId: "G-64N3F76T1Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;