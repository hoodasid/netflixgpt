// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLIywBXfFzc78tcvytr5pc8RaLScSPNBo",
  authDomain: "netflixgpt-6d558.firebaseapp.com",
  databaseURL: "https://netflixgpt-6d558-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflixgpt-6d558",
  storageBucket: "netflixgpt-6d558.firebasestorage.app",
  messagingSenderId: "664153683066",
  appId: "1:664153683066:web:a0d293d72e4798badcb7c3",
  measurementId: "G-4R5MEPSS80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };