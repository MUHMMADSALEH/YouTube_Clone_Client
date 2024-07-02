// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyD_uuH4Ub9JGigyTIB2Qjt3mN5WRksVHRo",
  // authDomain: "o-e2049.firebaseapp.com",
  // projectId: "o-e2049",
  // storageBucket: "o-e2049.appspot.com",
  // messagingSenderId: "358059857666",
  // appId: "1:358059857666:web:13180087f2ca99d371541b"
  apiKey: "AIzaSyBE0t7cPIqv3AAyNhCeK2tMhkjO_8gFg_0",
  authDomain: "clone-33218.firebaseapp.com",
  projectId: "clone-33218",
  storageBucket: "clone-33218.appspot.com",
  messagingSenderId: "166264878887",
  appId: "1:166264878887:web:4cd3343d655637576d1b02",
  measurementId: "G-JZXKDL0FW5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
