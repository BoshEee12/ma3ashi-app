// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUM63o6kjJnUTwOpbJaRqFIKdw5nen5ko",
  authDomain: "ma3ashi-app.firebaseapp.com",
  projectId: "ma3ashi-app",
  storageBucket: "ma3ashi-app.appspot.com",
  messagingSenderId: "86415170782",
  appId: "1:86415170782:web:baa3c5bac2381b5c21764f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
