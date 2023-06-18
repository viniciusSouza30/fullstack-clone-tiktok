import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCMKAoWipwYXJCF2ODoHxbyPr-0v9r40wE",
  authDomain: "clone-tiktok-a0c34.firebaseapp.com",
  projectId: "clone-tiktok-a0c34",
  storageBucket: "clone-tiktok-a0c34.appspot.com",
  messagingSenderId: "282727366502",
  appId: "1:282727366502:web:791255bf0cfb30b37c92a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;