// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD__KHG6ix82QmjF5ROeeUt59L-7A5yguo",
  authDomain: "svepabotten.firebaseapp.com",
  projectId: "svepabotten",
  storageBucket: "svepabotten.appspot.com",
  messagingSenderId: "942412613736",
  appId: "1:942412613736:web:6fd87036a49482decfd3dd",
  measurementId: "G-TQGW72PNJ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
