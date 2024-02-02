import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";
import { getFirestore,doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXNtUy7jjH3_hmdS4h0-YQV78L3deAIpk",
    authDomain: "react-authentication-8e83c.firebaseapp.com",
    projectId: "react-authentication-8e83c",
    storageBucket: "react-authentication-8e83c.appspot.com",
    messagingSenderId: "289538469463",
    appId: "1:289538469463:web:6e751bf114bbddc8ffbd12",
    measurementId: "G-71QVTL958P"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    getFirestore ,
    db,
    doc,
    setDoc
    
}