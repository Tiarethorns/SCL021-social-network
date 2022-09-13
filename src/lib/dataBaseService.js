import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  // collection, query, onSnapshot
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// Add a new document in collection "cities"
async function createPost(texto) {
  await addDoc(collection(db, "post"), {
    content: texto,
  });
}

export { createPost };

/*const q = query(collection(db, "listaPost");
const mostrarPost = onSnapshot(q, (querySnapshot) => {
  const listaPost = [];
  querySnapshot.forEach((doc) => {
    listaPost.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
});

export { mostrarPost };*/
