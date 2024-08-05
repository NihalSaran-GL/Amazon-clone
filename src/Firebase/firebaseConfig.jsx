// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_iM8eRcYObPit6c-LSaLzB2-mAnCajp4",
  authDomain: "clone-f1ccd.firebaseapp.com",
  projectId: "clone-f1ccd",
  storageBucket: "clone-f1ccd.appspot.com",
  messagingSenderId: "167467505553",
  appId: "1:167467505553:web:39ce8b8729c73d88152c30",
  measurementId: "G-2DF81P6CKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
