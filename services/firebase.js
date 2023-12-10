// Import the functions you need from the SDKs you need
import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const extraConfig = Constants.expoConfig.extra;
const firebaseConfig = {
  apiKey: extraConfig?.firebase?.apiKey,
  authDomain: extraConfig?.firebase?.authDomain,
  projectId: extraConfig?.firebase?.projectId,
  storageBucket: extraConfig?.firebase?.storageBucket,
  messagingSenderId: extraConfig?.firebase?.messagingSenderId,
  appId: extraConfig?.firebase?.appId,
  measurementId: extraConfig?.firebase?.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;