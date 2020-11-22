import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtdG7F1146HDiZRDrJNiyU_7vRYs26fgU",
  authDomain: "ecommerce-b08c8.firebaseapp.com",
  databaseURL: "https://ecommerce-b08c8.firebaseio.com",
  projectId: "ecommerce-b08c8",
  storageBucket: "ecommerce-b08c8.appspot.com",
  messagingSenderId: "935749265486",
  appId: "1:935749265486:web:bee6755c8a7f670487fb1f",
  measurementId: "G-Q48SZETTXR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
