import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

var fb = require('firebase');

const auth = getAuth();
auth.languageCode = 'it';

(function () {

const firebaseConfig = {
  apiKey: "AIzaSyBjEB6kZcgzamrNNtnXiix89lhQ5MQ1oVQ",
  authDomain: "ucsal-web-project.firebaseapp.com",
  databaseURL: "https://ucsal-web-project-default-rtdb.firebaseio.com",
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