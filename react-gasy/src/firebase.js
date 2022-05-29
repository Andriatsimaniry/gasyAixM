import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCotweBTOA69bIb_ZFX2fdBbaltkYmP9A4",
  authDomain: "aixgam.firebaseapp.com",
  projectId: "aixgam",
  storageBucket: "aixgam.appspot.com",
  messagingSenderId: "818871664762",
  appId: "1:818871664762:web:f5163bcd4e8d766a44fbc3",
  measurementId: "G-97XHDJ3E2T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);