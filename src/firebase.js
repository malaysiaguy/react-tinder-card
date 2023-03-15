// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics"
import { getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore"
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2vzBYnL6D2pgE66QVwTGtmlSFLA65Emw",
  authDomain: "malaysiaguy-profile.firebaseapp.com",
  projectId: "malaysiaguy-profile",
  storageBucket: "malaysiaguy-profile.appspot.com",
  messagingSenderId: "476148386575",
  appId: "1:476148386575:web:44f5312615cd5e87b08c7a",
  measurementId: "G-JSFWLXL34P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
//const analytics = getAnalytics(app)
export const db = getFirestore(app)