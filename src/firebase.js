// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtngjs-qZBYbHOywzpZlbM_-qCt6FfEGI",
  authDomain: "react-firebase-authentic-29fc7.firebaseapp.com",
  projectId: "react-firebase-authentic-29fc7",
  storageBucket: "react-firebase-authentic-29fc7.appspot.com",
  messagingSenderId: "45647756645",
  appId: "1:45647756645:web:57c351f6028e1e8754758c",
  measurementId: "G-J940LJ8VF8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()