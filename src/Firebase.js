// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBldibt17dE0i8oW9pqUiE02zcEf6II9ic",
  authDomain: "converter-9d8f7.firebaseapp.com",
  projectId: "converter-9d8f7",
  storageBucket: "converter-9d8f7.firebasestorage.app",
  messagingSenderId: "113836127111",
  appId: "1:113836127111:web:f5e6d272ea7e09a2e39922",
  measurementId: "G-RQ7FZ5Z30H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
