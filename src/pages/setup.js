// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIfzTCfUEYifzSKITO1pOMvcRNgI_Dqzc",
  authDomain: "email-4dcad.firebaseapp.com",
  projectId: "email-4dcad",
  storageBucket: "email-4dcad.appspot.com",
  messagingSenderId: "598595428347",
  appId: "1:598595428347:web:a7de85802a43384b49355e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;