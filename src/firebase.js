  
  import firebase from 'firebase/app'
  import 'firebase/firestore'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAVopFzagaL9uMeSDN-hpvg6yhgTtZxTL0",
    authDomain: "react-crud-977c2.firebaseapp.com",
    projectId: "react-crud-977c2",
    storageBucket: "react-crud-977c2.appspot.com",
    messagingSenderId: "472318214494",
    appId: "1:472318214494:web:3317ac37cab475a203cfcf",
    measurementId: "G-8VCYS95M29"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// firebase.analytics();

export const db = fb.firestore();