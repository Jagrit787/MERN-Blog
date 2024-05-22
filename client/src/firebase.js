// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jags-mern-blog.firebaseapp.com",
  projectId: "jags-mern-blog",
  storageBucket: "jags-mern-blog.appspot.com",
  messagingSenderId: "402360584174",
  appId: "1:402360584174:web:cd555d0ccfe6785ab430ff",
  measurementId: "G-90VM6BQ89M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

