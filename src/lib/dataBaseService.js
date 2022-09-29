import { db, auth } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
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
  const q = query(collection(db, "post"), orderBy("fecha", "desc"));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });
    showPosts(posts);
    console.log("Estos son los posteos: ", posts);
  });
};
bajarPosts();

export { createPost };
export { updateLikes };
