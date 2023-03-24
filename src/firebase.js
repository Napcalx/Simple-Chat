import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA25P7QdOySN-lMcwwpJOHsHvc0kbTMlQQ",
  authDomain: "chat-317b0.firebaseapp.com",
  projectId: "chat-317b0",
  storageBucket: "chat-317b0.appspot.com",
  messagingSenderId: "583039792371",
  appId: "1:583039792371:web:5945d3f721de1278c27386"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()