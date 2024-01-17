// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxS8mNGyr1qi--5E9kmNYtKmuvbQGj5so",
  authDomain: "twitter-clone-da2bc.firebaseapp.com",
  projectId: "twitter-clone-da2bc",
  storageBucket: "twitter-clone-da2bc.appspot.com ",
  messagingSenderId: 791352853333,
  appId: "1:791352853333:web:d8b6c1436f3b3c2c5ce5dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
