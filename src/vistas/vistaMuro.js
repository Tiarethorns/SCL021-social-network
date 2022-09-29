import { createPost, updateLikes } from "../lib/dataBaseService.js";
import { onNavigate } from "../main.js";
import { logOut } from "../lib/authService.js";

export const muro = () => {
  const home = document.createElement("div");

  const iconosBarra = document.createElement("div");
  iconosBarra.className = "iconosBarra";
  home.appendChild(iconosBarra);

  const moka = document.createElement("img");
  moka.src = "./img/moka.png";
  moka.className = "icono";
  moka.textContent = "Biblioteca";
  iconosBarra.appendChild(moka);

  const saco = document.createElement("img");
  saco.src = "./img/saco.png";
  saco.className = "icono";
  iconosBarra.appendChild(saco);

  const posteo = document.createElement("img");
  posteo.src = "./img/posteo.png";
  posteo.className = "icono";
  posteo.id = "LogOut";
  posteo.addEventListener("click", function () {
    document.getElementsById = "LogOut";
    logOut();
  });
  iconosBarra.appendChild(posteo);

  const textoBarra = document.createElement("div");
  textoBarra.className = "textoBarra";
  home.appendChild(textoBarra);

  const boxPrincipalMuro = document.createElement("div");
  boxPrincipalMuro.className = "boxPrincipalMuro";
  boxPrincipalMuro.id = "boxPrincipalMuro";
  home.appendChild(boxPrincipalMuro);
  // crear input
  const sendPost = document.createElement("textarea");
  sendPost.className = "sendPost";
  home.appendChild(sendPost);

  home.appendChild(document.createElement("br"));
  //home.appendChild(document.createElement("br"));

  const sendButton = document.createElement("button");
  sendButton.className = "sendButton";
  sendButton.textContent = "Enviar";
  sendButton.addEventListener("click", function () {
    document.getElementsByClassName = "sendButton";
    /*document.getElementById("root").innerHTML = "";*/
    createPost(sendPost.value);
  });
  home.appendChild(sendButton);

  return home;
};

let options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

export const showPosts = (posts) => {
  let boxPrincipalMuro = document.getElementById("boxPrincipalMuro");
  boxPrincipalMuro.innerHTML = "";
  for (let post of posts) {
    console.log(post);
    const el = document.createElement("div");
    el.className = "post";
    let likes = 0;
    const date = new Date(post.fecha).toLocaleDateString("es", options);
    el.textContent = post.autor + " " + " " + post.content + " " + date;

    const likeCount = document.createElement("p");
    likeCount.id = "likeCount";
    el.appendChild(likeCount);

    const likeGrain = document.createElement("img");
    likeGrain.className = "likeGrain";
    likeGrain.src = "./img/cgrain.png";
    likeGrain.addEventListener("click", (event) => {
      /*updateLikes(post.id, post.autor);*/
      likes++;
      likeCount.innerHTML = likes;
      console.log(likes);
    });

    el.appendChild(likeGrain);

    console.log(post);
    boxPrincipalMuro.appendChild(el);
  }
};
