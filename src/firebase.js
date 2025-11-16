// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXUnTqsdgUXN9bvV7viAwJNqREWIZxwz8",
  authDomain: "bookstores-87b63.firebaseapp.com",
  projectId: "bookstores-87b63",
  storageBucket: "bookstores-87b63.firebasestorage.app",
  messagingSenderId: "304859790732",
  appId: "1:304859790732:web:9d798770b29c3b9db52aa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);