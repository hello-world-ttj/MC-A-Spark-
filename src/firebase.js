import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyCtBOpY0NyXPBQHjRA7tZ6LrqkTz9e47_s",
    authDomain: "mca-spark-7c911.firebaseapp.com",
    projectId: "mca-spark-7c911",
    storageBucket: "mca-spark-7c911.appspot.com",
    messagingSenderId: "642548226770",
    appId: "1:642548226770:web:fb457bce6a9da32b8a6b0b"
  };

firebase.initializeApp(firebaseConfig)



export default firebase;