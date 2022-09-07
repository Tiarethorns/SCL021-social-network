// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
/*import { getAuth, onAuthStateChanged } from "firebase/auth"; //obtener info del usuario con el observador.*/

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

const firebaseConfig = {
  apiKey: "AIzaSyBUYUpKWG03urrR1sjgj22LfW6Gq46_V9M",
  authDomain: "coffeegram-d195a.firebaseapp.com",
  projectId: "coffeegram-d195a",
  storageBucket: "coffeegram-d195a.appspot.com",
  messagingSenderId: "1070553655292",
  appId: "1:1070553655292:web:9be63e4c534c1dffbbb479",
  measurementId: "G-CXTQGRMZ49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
