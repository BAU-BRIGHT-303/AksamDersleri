// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  snapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ5tuU681piifeItbKrHCcbRbTdMxXz-A",
  authDomain: "re-form-52c74.firebaseapp.com",
  projectId: "re-form-52c74",
  storageBucket: "re-form-52c74.appspot.com",
  messagingSenderId: "164953519787",
  appId: "1:164953519787:web:a1401ffee2309c2b64e9ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authantication işlemi
export const auth = getAuth(app);

//Data
export const db = getFirestore(app);

//Datanın haberler adında ki collectionun çekildiği yer.Tırnak içerisindeki alana datanın içerisindeki istediğşimzi collection nameini yazark onun içerisindeki verilere erişebiliriz.
export const ref = collection(db, "haberler");
