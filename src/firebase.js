import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA6iGJEGPBehQw1u4TUcL3oSTXoaDr75W8",
    authDomain: "huitziil-6a3e0.firebaseapp.com",
    databaseURL: "https://huitziil-6a3e0.firebaseio.com",
    projectId: "huitziil-6a3e0",
    storageBucket: "huitziil-6a3e0.appspot.com",
    messagingSenderId: "120958343360",
    appId: "1:120958343360:web:9f48e505703f3066de7525"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}