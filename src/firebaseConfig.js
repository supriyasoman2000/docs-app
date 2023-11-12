// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjYuU5vQWAJujIIp1Ff_ekMnWI13gCKXU",
  authDomain: "doc-app-9e54a.firebaseapp.com",
  projectId: "doc-app-9e54a",
  storageBucket: "doc-app-9e54a.appspot.com",
  messagingSenderId: "682350647298",
  appId: "1:682350647298:web:628ea8ec36fea6d9c0af1b",
  measurementId: "G-49WZJN0PBS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)