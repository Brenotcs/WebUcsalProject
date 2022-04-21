import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import { getAuth } from "firebase/auth";
import firebaseConfig from './firebaseConfig';

const firebase = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

var fb = require('firebase');

const auth = getAuth();
auth.languageCode = 'it';