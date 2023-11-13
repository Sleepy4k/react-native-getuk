import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCU5zFkp76mKchw0lUORT2RIJe14_cVETo',
  authDomain: 'toko-getuk.firebaseapp.com',
  databaseURL: 'https://toko-getuk.firebaseio.com',
  projectId: 'toko-getuk',
  storageBucket: 'toko-getuk.appspot.com'
};

const app = initializeApp(firebaseConfig);

export default app;
