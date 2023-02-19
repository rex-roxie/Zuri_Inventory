// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-vATTTIFWfA402thdHn-1Yv_NjnTZjQE",
  authDomain: "zuri-inv.firebaseapp.com",
  projectId: "zuri-inv",
  storageBucket: "zuri-inv.appspot.com",
  messagingSenderId: "430789854380",
  appId: "1:430789854380:web:eb3a3af65c961d8d0e8b09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { 
  auth,
  db
};