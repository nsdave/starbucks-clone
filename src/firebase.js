import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyB77EmplMcr7FWkrM-iFM1S80n_ucKGKUk",
  authDomain: "starbucks-clone-3ee20.firebaseapp.com",
  projectId: "starbucks-clone-3ee20",
  storageBucket: "starbucks-clone-3ee20.appspot.com",
  messagingSenderId: "796358540469",
  appId: "1:796358540469:web:2f4e98a3ec1053ab1212fc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = firebaseApp()




export { auth }