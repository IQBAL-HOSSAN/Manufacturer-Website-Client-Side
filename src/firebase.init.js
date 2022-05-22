// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyAtE__zQlVCA5bdMZk_-1dzZH6IuspGVqQ",
  authDomain: "assignment-12-ab83a.firebaseapp.com",
  projectId: "assignment-12-ab83a",
  storageBucket: "assignment-12-ab83a.appspot.com",
  messagingSenderId: "677368280681",
  appId: "1:677368280681:web:335f210f747f776e5a14f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
