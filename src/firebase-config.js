// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDar4XJUc82OtcomDaHn-VgkkJvmzIOCF0",
  authDomain: "msftrep-ecommerce.firebaseapp.com",
  projectId: "msftrep-ecommerce",
  storageBucket: "msftrep-ecommerce.appspot.com",
  messagingSenderId: "588752639749",
  appId: "1:588752639749:web:cd8d8eef68e22bd5c8c96c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
