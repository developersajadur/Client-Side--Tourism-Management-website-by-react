// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Leh-eQWS-fda0k6ciGNURULre43V3l0",
  authDomain: "travel-go-9542d.firebaseapp.com",
  projectId: "travel-go-9542d",
  storageBucket: "travel-go-9542d.appspot.com",
  messagingSenderId: "216817900732",
  appId: "1:216817900732:web:d9df0780142002ee0084b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth