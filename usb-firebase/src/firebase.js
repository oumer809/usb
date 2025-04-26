  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD1Kl_TemLT-zd8-fhDOA44YYuoJfBtcMA",
  authDomain: "fir-course-89f89.firebaseapp.com",
  projectId: "fir-course-89f89",
  storageBucket: "fir-course-89f89.firebasestorage.app",
  messagingSenderId: "307179411987",
  appId: "1:307179411987:web:c1cb4b8f19860ea35bbde6",
  measurementId: "G-12TE308EC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);