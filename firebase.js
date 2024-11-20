import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACNm4SXNCOoQKzc3UQkMKU3FFjzmKbm2U",
  authDomain: "task-7-86d2c.firebaseapp.com",
  projectId: "task-7-86d2c",
  storageBucket: "task-7-86d2c.appspot.com",
  messagingSenderId: "407092768793",
  appId: "1:407092768793:web:cbf63886c9731eb8bc3a88",
  measurementId: "G-F96D6084ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase App Initialized:", app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
