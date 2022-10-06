import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxxjU4py03U3Mp4sReG9GEmRmPydAzupw",
  authDomain: "ecomercereac.firebaseapp.com",
  projectId: "ecomercereac",
  storageBucket: "ecomercereac.appspot.com",
  messagingSenderId: "175128627876",
  appId: "1:175128627876:web:403043e110e60885b7b431",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
