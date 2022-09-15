import { db, auth } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { showPosts } from "../vistas/vistaMuro.js";
async function createPost(texto) {
  console.log("verificar el user", auth.currentUser.email);
  let fecha = new Date();
  await addDoc(collection(db, "post"), {
    content: texto,
    fecha: fecha.getTime(),
    autor: auth.currentUser.email,
    likes: [],
  });
}

const bajarPosts = () => {
  const q = query(collection(db, "post"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    showPosts(posts);
    console.log("Estos son los posteos: ", posts);
  });
};
bajarPosts();

export { createPost };
