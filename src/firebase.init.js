// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMCP80aIMaV0HM1YqNfOSV70EmsaypaPw",
  authDomain: "barishal-gadget-store.firebaseapp.com",
  projectId: "barishal-gadget-store",
  storageBucket: "barishal-gadget-store.appspot.com",
  messagingSenderId: "602142167939",
  appId: "1:602142167939:web:d7cf71daccc34f24e29cb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;