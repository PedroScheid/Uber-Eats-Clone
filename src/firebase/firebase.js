import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDA0elTUI42i7uak5PL3wrjUbT8tx3fNB4",
    authDomain: "uber-eats-clone-yelp-api.firebaseapp.com",
    projectId: "uber-eats-clone-yelp-api",
    storageBucket: "uber-eats-clone-yelp-api.appspot.com",
    messagingSenderId: "950145733353",
    appId: "1:950145733353:web:73039680feb91dcd211678"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth, firebaseConfig };
