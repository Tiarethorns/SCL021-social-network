import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { showPosts } from "../vistas/vistaMuro.js";
async function createPost(texto) {
  await addDoc(collection(db, "post"), {
    content: texto,
  });
}

const bajarPosts = () => {
  const q = query(collection(db, "post"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data().content);
    });
    showPosts(posts);
    console.log("Estos son los posteos: ", post.join(" "));
  });
};
bajarPosts();

export { createPost };
