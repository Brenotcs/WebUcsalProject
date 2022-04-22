import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import { getAuth } from "firebase/auth";
import firebaseConfig from './firebaseConfig';

    const config = {
      apiKey: "AIzaSyBjEB6kZcgzamrNNtnXiix89lhQ5MQ1oVQ",
      authDomain: "ucsal-web-project.firebaseapp.com",
      databaseURL: "https://ucsal-web-project-default-rtdb.firebaseio.com",
      projectId: "ucsal-web-project",
      storageBucket: "ucsal-web-project.appspot.com",
      messagingSenderId: "930705067896",
      appId: "1:930705067896:web:cf6d4346ed93a030eb028d",
      measurementId: "G-YZXSC6DSZ4"
    };
    
    const app = initializeApp(config);
    const analytics = getAnalytics(app);