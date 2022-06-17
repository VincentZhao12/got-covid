import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnnf7dcYdIHBDiv9W3woHoE2EgTRfycNk",
  authDomain: "got-covid-4188c.firebaseapp.com",
  projectId: "got-covid-4188c",
  storageBucket: "got-covid-4188c.appspot.com",
  messagingSenderId: "84827107825",
  appId: "1:84827107825:web:7e0c8751154296b77f1450",
};

const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
