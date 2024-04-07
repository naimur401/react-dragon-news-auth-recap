// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk2OnRxyj1nkkVQoaf-FkLw8Jj-C5x1cI",
  authDomain: "react-dragon-news-auth-dbe88.firebaseapp.com",
  projectId: "react-dragon-news-auth-dbe88",
  storageBucket: "react-dragon-news-auth-dbe88.appspot.com",
  messagingSenderId: "67757715066",
  appId: "1:67757715066:web:9d588b5eefea34fb0355c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;