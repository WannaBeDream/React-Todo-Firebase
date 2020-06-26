import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAZ_a7vUqkbEgLKuhAIzBkL4IV736o3AcE",
  authDomain: "react-todo-e0cd8.firebaseapp.com",
  databaseURL: "https://react-todo-e0cd8.firebaseio.com",
  projectId: "react-todo-e0cd8",
  storageBucket: "react-todo-e0cd8.appspot.com",
  messagingSenderId: "649964324515",
  appId: "1:649964324515:web:d34860cb267c7a01a5e116"
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }
