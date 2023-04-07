// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/database'
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_ID,
  REACT_APP_FIREBASE_APP_ID,

} from "../constants/firebase/firebase";



const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
//   measurementId: REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const dataref = firebase.database()
export const storage = firebase.storage()

export default firebase

// REACT_APP_FIREBASE_API_KEY=AIzaSyDW9aeW82Rsh-LyQX5hxjZEdK7xm0466sM
// REACT_APP_AUTH_DOMAIN=trulycontacts-18e91.firebaseapp.com
// REACT_APP_DATABASE_URL=https://trulycontacts-18e91-default-rtdb.firebaseio.com/
// REACT_APP_PROJECT_ID=trulycontacts-18e91
// REACT_APP_FIREBASE_STORAGE_BUCKET=trulycontacts-18e91.appspot.com
// REACT_APP_FIREBASE_MESSAGING_ID=522939796412
// REACT_APP_FIREBASE_ID=1:522939796412:web:1cb9ef061d90af0fa839b9