import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyA-qvU3lZPwKcqh5ejwz3LbBTbGsEjdCLs",
    authDomain: "unichat-3b1d4.firebaseapp.com",
    projectId: "unichat-3b1d4",
    storageBucket: "unichat-3b1d4.appspot.com",
    messagingSenderId: "284045691556",
    appId: "1:284045691556:web:9829e16d942841ae373431"
  }).auth();