import { createPost, updateLikes } from "../lib/dataBaseService.js";
/*import { updateLikes } from "../lib/dataBaseService.js";*/
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

  /*const biblioteca = document.createElement("p");
  biblioteca.textContent = "Biblioteca";
  biblioteca.className = "text";
  textoBarra.appendChild(biblioteca);

  const muroSaco = document.createElement("p");
  muroSaco.textContent = "Muro";
  muroSaco.className = "text";
  textoBarra.appendChild(muroSaco);

  const postea = document.createElement("p");
  postea.textContent = "Postea";
  postea.className = "text";
  textoBarra.appendChild(postea);*/

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
//dar aqui el lugar donde estaran alojados los post, usar for each
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
    const date = new Date(post.fecha).toLocaleDateString("es", options);
    el.textContent = post.autor + " " + " " + post.content + " " + date;

    const likeGrain = document.createElement("img");
    likeGrain.className = "likeGrain";
    likeGrain.src = "./img/cgrain.png";
    likeGrain.dataset.id = post.id;
    likeGrain.addEventListener("click", (e) => {
      updateLikes(e.target.dataset.id, post.likes);
    });
    likeGrain.innerHTML = post.likes.length;
    el.appendChild(likeGrain);

    /*const likeNums = create.createElement("p");
    likeNums.className = "Likes";
    likeGrain.textContent = likes + " " + auth.currentUser.email;
    el.appendChild(likeNums);*/

    console.log(post);
    boxPrincipalMuro.appendChild(el);
  }
};
