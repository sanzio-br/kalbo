// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4SP9XMOWlriPeVRqH4-Mb0jVzDsE9eA8",
  authDomain: "kalbo-adventures-webapp-db.firebaseapp.com",
  projectId: "kalbo-adventures-webapp-db",
  storageBucket: "kalbo-adventures-webapp-db.appspot.com",
  messagingSenderId: "459604474512",
  appId: "1:459604474512:web:21f59eaf6e791b1fbff615",
  measurementId: "G-MEXEQ5Q118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();