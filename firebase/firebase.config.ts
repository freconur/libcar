import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMPFsWnvDbA2m0FAmbHUuEj0c9A8yVBMw",
  authDomain: "libreria-carmen.firebaseapp.com",
  projectId: "libreria-carmen",
  storageBucket: "libreria-carmen.appspot.com",
  messagingSenderId: "389904680714",
  appId: "1:389904680714:web:fa1237fcb2b568c3155cf3",
  measurementId: "G-4Z0YK25Q9M"
};

export const app = initializeApp(firebaseConfig);
export const authApp = initializeApp(firebaseConfig);