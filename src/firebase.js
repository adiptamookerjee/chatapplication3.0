import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYfwuXnMVhUgwyRu9SXiz953DaXbv-jwg",
  authDomain: "textapp-4af1e.firebaseapp.com",
  projectId: "textapp-4af1e",
  storageBucket: "textapp-4af1e.appspot.com",
  messagingSenderId: "335607603556",
  appId: "1:335607603556:web:495cc910ffb23fc6339a71",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
