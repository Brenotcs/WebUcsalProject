import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
(function () {
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjEB6kZcgzamrNNtnXiix89lhQ5MQ1oVQ",
  authDomain: "ucsal-web-project.firebaseapp.com",
  projectId: "ucsal-web-project",
  storageBucket: "ucsal-web-project.appspot.com",
  messagingSenderId: "930705067896",
  appId: "1:930705067896:web:cf6d4346ed93a030eb028d",
  measurementId: "G-YZXSC6DSZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
})()