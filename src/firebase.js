import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyACvi25C9NnOo0mw6BaAarEJ0OQ0SBhWE4",
    authDomain: "kapp-34cd7.firebaseapp.com",
    databaseURL: "https://kapp-34cd7.firebaseio.com",
    projectId: "kapp-34cd7",
    storageBucket: "kapp-34cd7.firebasestorage.app",
    messagingSenderId: "311318451350",
    appId: "1:311318451350:web:3d1ce648a9cc2b762adeb7"
});

const fb = firebase;

export default fb;