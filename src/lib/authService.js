import { auth } from "./firebaseConfig.js";
import { onNavigate } from "../main.js";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, // crear funcion y luego pegar funcion desde firebase
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user);
      onNavigate("/muro");
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
};
export { loginWithGoogle };
