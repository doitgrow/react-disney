// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEgOiaL5mWD9PwQh6LV9zrdZPSPKPGHyM",
    authDomain: "react-disney-plus-app-2fff7.firebaseapp.com",
    projectId: "react-disney-plus-app-2fff7",
    storageBucket: "react-disney-plus-app-2fff7.appspot.com",
    messagingSenderId: "880801522916",
    appId: "1:880801522916:web:f4d47cef6f2e3726e978f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
