// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0LBM3Lw6i1_gH-XbgyZe6RkVch-sWZgc",
  authDomain: "foody-8160d.firebaseapp.com",
  projectId: "foody-8160d",
  storageBucket: "foody-8160d.appspot.com",
  messagingSenderId: "499641820493",
  appId: "1:499641820493:web:799aefc0f32a44526b8304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

