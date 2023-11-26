// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU5zFkp76mKchw0lUORT2RIJe14_cVETo",
  authDomain: "toko-getuk.firebaseapp.com",
  projectId: "toko-getuk",
  storageBucket: "toko-getuk.appspot.com",
  messagingSenderId: "1005601584494",
  appId: "1:1005601584494:web:b6a80f501f7313d9747d7f",
  measurementId: "G-BL30XSVPH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;