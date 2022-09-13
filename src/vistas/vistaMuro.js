import { createPost } from "../lib/dataBaseService.js";

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
  iconosBarra.appendChild(posteo);

  const boxPrincipalMuro = document.createElement("div");
  boxPrincipalMuro.className = "boxPrincipalMuro";
  home.appendChild(boxPrincipalMuro);
  // crear input
  const sendPost = document.createElement("textarea");
  sendPost.className = "post";
  home.appendChild(sendPost);

  home.appendChild(document.createElement("br"));
  //home.appendChild(document.createElement("br"));

  const sendButton = document.createElement("button");
  sendButton.className = "sendButton";
  sendButton.textContent = "Enviar";
  sendButton.addEventListener("click", function () {
    document.getElementsByClassName = "sendButton";
    document.getElementById("root").innerHTML = "";
    createPost(sendPost.value);
  });
  home.appendChild(sendButton);

  home.appendChild(document.createElement("br"));
  home.appendChild(document.createElement("br"));

  const post1 = document.createElement("textarea");
  post1.className = "post";
  //post1.textContent = "Aquí van los posteos 1";
  home.appendChild(post1);

  /*const post2 = document.createElement("div");
  post2.className = "post";
  post2.textContent = "Aquí van los posteos 2";
  boxPrincipalMuro.appendChild(post2);

  const post3 = document.createElement("div");
  post3.className = "post";
  post3.textContent = "Aquí van los posteos 3";
  boxPrincipalMuro.appendChild(post3);*/

  /*const post4 = document.createElement("div");
  post4.className = "post";
  post4.textContent = "Aquí van los posteos 4";
  boxPrincipalMuro.appendChild(post4);*/

  return home;
};
