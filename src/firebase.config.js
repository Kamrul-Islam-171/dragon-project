// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log(import.meta.env.VITE_SOME_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDoain,
  projectId: import.meta.env.VITE_projecId,
  storageBucket: import.meta.env.VITE_storagBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;