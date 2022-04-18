import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj15MAv3-ZcHaScU538DC04jtCT9LCZ0Y",
  authDomain: "green-bangla-tours-37d8b.firebaseapp.com",
  projectId: "green-bangla-tours-37d8b",
  storageBucket: "green-bangla-tours-37d8b.appspot.com",
  messagingSenderId: "976328589380",
  appId: "1:976328589380:web:9b323ff7fe970beb27bc11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth