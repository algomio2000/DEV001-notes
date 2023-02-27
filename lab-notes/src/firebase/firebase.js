// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDhunNjDtKvadxMTRTvLKaa5X3_o5acCKk",
    authDomain: "organize-me-80083.firebaseapp.com",
    projectId: "organize-me-80083",
    storageBucket: "organize-me-80083.appspot.com",
    messagingSenderId: "66259766887",
    appId: "1:66259766887:web:ecee6e8dd4b0ba3cd34ec2",
    measurementId: "G-JLCRZN5HY4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


