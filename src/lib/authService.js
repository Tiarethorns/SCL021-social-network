import { auth } from "./firebaseConfig.js";
import { onNavigate } from "../main.js";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth,
  signOut,

  // crear funcion y luego pegar funcion desde firebase
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

/*const auth = getAuth();*/
export const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      onNavigate("/muro");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
// email and password
/*const auth = getAuth();*/
export const signIn = (email, password) => {
  console.log({ email, password });
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      onNavigate("/muro");
      // ...
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
//recuperar contraseña
export const recuperarCon = (email) => {
  return sendPasswordResetEmail(auth, email);
};

//sesionActiva
const observator = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    onNavigate = "/muro";
    console.log("existe usuario activo");
    const uid = user.uid;
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // No user is signed in.
    onNavigate = "/";
    console.log("no existe usuario activo");
    // ...
  }
};

//Finalizar sesión
export const logOut = () => {
  signOut(auth)
    .then(() => {
      onNavigate("/");
      console.log("Saliendo...");
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};
