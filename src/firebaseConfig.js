// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbZEUYlY6CirV67Z0skQoLdFHYMDE6Q00",
  authDomain: "pokertool-decision.firebaseapp.com",
  projectId: "pokertool-decision",
  storageBucket: "pokertool-decision.appspot.com",
  messagingSenderId: "489557720396",
  appId: "1:489557720396:web:2589d058da654df25da3e9",
  measurementId: "G-1XWWBJQ1ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);