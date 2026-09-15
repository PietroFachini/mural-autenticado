import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyB0qZsoBufCB-OPuFsm0PsgFPsDFNr4tf8",
  authDomain: "mural-firebase-e8ac0.firebaseapp.com",
  projectId: "mural-firebase-e8ac0",
  storageBucket: "mural-firebase-e8ac0.firebasestorage.app",
  messagingSenderId: "960188301239",
  appId: "1:960188301239:web:c76a638ad8f1021165f232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
