// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxLCOxkrW7PEbb95U82_-5uhfSBHX-5ro",
  authDomain: "dhl-form.firebaseapp.com",
  projectId: "dhl-form",
  storageBucket: "dhl-form.appspot.com",
  messagingSenderId: "611968049033",
  appId: "1:611968049033:web:bcf7b597867eae1beccb58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
};

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
};

export function logout() {
    return signOut(auth);
}

export function useAccount () {
    const [account, setAccount]= useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setAccount(user))
        return unsub;
    }, [])
    return account;
}