// Import the functions you need from the SDKs you need
import { firebase } from "@react-native-firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaklIEadgb9ZckNGOyr6SDiaZvbOYZqBY",
  authDomain: "gadget-garage-4a721.firebaseapp.com",
  projectId: "gadget-garage-4a721",
  storageBucket: "gadget-garage-4a721.firebasestorage.app",
  messagingSenderId: "24362439539",
  appId: "1:24362439539:web:0fb2108ff312256f7f2b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore(app);
export { db };