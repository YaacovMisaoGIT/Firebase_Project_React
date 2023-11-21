 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIPDzfwZloEZ1C-b0zYrSe4AKdUwv2Ff8",
  authDomain: "video-playlist-3887a.firebaseapp.com",
  projectId: "video-playlist-3887a",
  storageBucket: "video-playlist-3887a.appspot.com",
  messagingSenderId: "112157712627",
  appId: "1:112157712627:web:d2540af4d042c47cf79786"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)