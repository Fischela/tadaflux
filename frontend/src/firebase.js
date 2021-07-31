import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDGUjwP0R4GpI0mSXEPsGcYvds5SphI0u8",
  authDomain: "ecommhub-7f8bb.firebaseapp.com",
  projectId: "ecommhub-7f8bb",
  storageBucket: "ecommhub-7f8bb.appspot.com",
  messagingSenderId: "486038183948",
  appId: "1:486038183948:web:8a7c9d703ebdf2c9748e29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();