// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqnQGIssDPE2B3-WJfjnsua2OK6TAKRh4",
  authDomain: "twitter-clone-9ff3c.firebaseapp.com",
  projectId: "twitter-clone-9ff3c",
  storageBucket: "twitter-clone-9ff3c.appspot.com",
  messagingSenderId: "392023821236",
  appId: "1:392023821236:web:32a41ec27926221d1b40e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage()