// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getAuth } from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhIJBb44oki-48DVyYfygXCU0R5sqR4Eo",
  authDomain: "react-app01-de917.firebaseapp.com",
  databaseURL: "https://react-app01-de917-default-rtdb.firebaseio.com",
  projectId: "react-app01-de917",
  storageBucket: "react-app01-de917.appspot.com",
  messagingSenderId: "247400407245",
  appId: "1:247400407245:web:6abd5832a08a6415f80984",
  measurementId: "G-LHXHLR90J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);