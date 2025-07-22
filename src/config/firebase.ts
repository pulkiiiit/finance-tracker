// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvqot-J0Rm8so_TW2fwqWugGUER6CSsIc",
  authDomain: "finance-tracker-2af90.firebaseapp.com",
  projectId: "finance-tracker-2af90",
  storageBucket: "finance-tracker-2af90.firebasestorage.app",
  messagingSenderId: "1039813446422",
  appId: "1:1039813446422:web:bca20b4416fcbc5679de37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);