import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

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
const auth = getAuth(app);

export { auth };
