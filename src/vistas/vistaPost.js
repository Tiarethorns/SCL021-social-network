import { onNavigate } from "../main.js";
export const post = () => {
  const createNewPost = document.createElement("div");
  createNewPost.className = "boxPrincipal";
  post.appenchild(createNewPost);

  const imgPost = document.createElement("img");
  imgPost.src = "./img/imgPost.png";
  imgPost.className = "icono";
  createNewPost.appendChild(imgPost);

  const quePostear = document.createElement("p");

  const postText = document.createElement("input");
  postText.type = "textarea";
  postText.appendChild(createNewPost);

  // aqui tu codigo
  console.log("Hola mundo!");
};
