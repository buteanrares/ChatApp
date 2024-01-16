import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDg643QStWpNc935HzAvo11WAXDe71gdkw",
  authDomain: "chatapp-215d2.firebaseapp.com",
  projectId: "chatapp-215d2",
  storageBucket: "chatapp-215d2.appspot.com",
  messagingSenderId: "268390075263",
  appId: "1:268390075263:web:1b68bd65dc083aea3ee84a"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
