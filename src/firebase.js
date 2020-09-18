import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7PvaZf4CNZ1a04JQVq1Ivwdwct-Syh8c",
    authDomain: "clone-ea9ab.firebaseapp.com",
    databaseURL: "https://clone-ea9ab.firebaseio.com",
    projectId: "clone-ea9ab",
    storageBucket: "clone-ea9ab.appspot.com",
    messagingSenderId: "33249681236",
    appId: "1:33249681236:web:eb57990f06e4651991b2c1",
    measurementId: "G-SNCBZ47BCM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
export { db, auth };