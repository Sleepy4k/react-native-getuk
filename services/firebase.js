// Import the functions you need from the SDKs you need
import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants?.manifest?.extra?.firebase.apiKey,
  authDomain: Constants?.manifest?.extra?.firebase.authDomain,
  projectId: Constants?.manifest?.extra?.firebase.projectId,
  storageBucket: Constants?.manifest?.extra?.firebase.storageBucket,
  messagingSenderId: Constants?.manifest?.extra?.firebase.messagingSenderId,
  appId: Constants?.manifest?.extra?.firebase.appId,
  measurementId: Constants?.manifest?.extra?.firebase.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;