import React from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


export default FirbaseConfig = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyAOY37oAY1cKE4q2CpejZbgeuhcXnYgUTE",
    authDomain: "amarbatch-1924c.firebaseapp.com",
    projectId: "amarbatch-1924c",
    storageBucket: "amarbatch-1924c.appspot.com",
    messagingSenderId: "1063982591168",
    appId: "1:1063982591168:web:5dbbddefbc633e6a4c9125",
    measurementId: "G-9VQTQQT20S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export const auth = app.auth()
