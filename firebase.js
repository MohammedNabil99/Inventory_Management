// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPVvtRb0yZ1VH-VY2hvGfIm1wHJuvtd7M",
  authDomain: "inventory-management-62ed3.firebaseapp.com",
  projectId: "inventory-management-62ed3",
  storageBucket: "inventory-management-62ed3.appspot.com",
  messagingSenderId: "662476186306",
  appId: "1:662476186306:web:c4e016057533f0840a515b",
  measurementId: "G-0YMDRWZXGF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
