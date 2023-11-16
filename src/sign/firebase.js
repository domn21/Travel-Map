import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7VTCZ07a5FpxSQfakBK1an9ckZrWk_54",
    authDomain: "tm-login-7b4c4.firebaseapp.com",
    projectId: "tm-login-7b4c4",
    storageBucket: "tm-login-7b4c4.appspot.com",
    messagingSenderId: "721178017342",
    appId: "1:721178017342:web:04da56fd03a7ae2c215b6f",
    measurementId: "G-2XXDZ4G48T"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);

  export { firebaseAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword };