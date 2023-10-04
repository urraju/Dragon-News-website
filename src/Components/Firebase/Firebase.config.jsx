import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvzv2_0xeJ4E6LBU41nEpd-Su4FyUlZ_g",
  authDomain: "new-dragon-fa489.firebaseapp.com",
  projectId: "new-dragon-fa489",
  storageBucket: "new-dragon-fa489.appspot.com",
  messagingSenderId: "366910795719",
  appId: "1:366910795719:web:0c7eb3b9c5b61f8f6ff3e2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
