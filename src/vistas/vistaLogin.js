import { loginWithGoogle } from "../lib/authService.js";
import { singIn } from "../lib/authService.js";
import { onNavigate } from "../main.js";

export const login = () => {
  const logearse = document.createElement("div");
  logearse.className = "container-login";

  const boxPrincipal = document.createElement("div");
  boxPrincipal.className = "boxPrincipal";
  logearse.appendChild(boxPrincipal);

  const inputUser = document.createElement("input");
  inputUser.className = "input";
  inputUser.id = "email";
  inputUser.setAttribute("placeholder", "Username");
  boxPrincipal.appendChild(inputUser);

  const inputPassword = document.createElement("input");
  inputPassword.className = "input";
  inputPassword.id = "password";
  inputPassword.setAttribute("placeholder", "Password");
  inputPassword.type = "password";
  boxPrincipal.appendChild(inputPassword);

  const btnLog = document.createElement("button");
  btnLog.className = "btn-log";
  btnLog.innerText = "Log In";
  btnLog.addEventListener("click", () => {
    singIn(inputUser.value, inputPassword.value).then(() => {
      onNavigate("/muro");
    });
  });

  boxPrincipal.appendChild(btnLog);

  const text = document.createElement("p");
  text.className = "text";
  text.innerHTML =
    "¿Olvidaste tu contraseña? <a id = 'con'> Haz click aquí </a> <br> <a id='link' >Crea tu cuenta</a>";
  boxPrincipal.appendChild(text);
  boxPrincipal.querySelector("#link").addEventListener("click", () => {
    onNavigate("/register");
  });
  boxPrincipal.querySelector("#con").addEventListener("click", () => {
    onNavigate("/contrasena");
  });

  const btngoogle = document.createElement("button");
  btngoogle.className = "btngoogle";
  btngoogle.innerHTML = "Ingresa con tu cuenta de Google";
  btngoogle.addEventListener("click", () => {
    loginWithGoogle();
  });
  logearse.appendChild(btngoogle);

  const imgGgle = document.createElement("img");
  imgGgle.className = "imgGgle";
  imgGgle.src = "./img/google.png";
  btngoogle.appendChild(imgGgle);

  return logearse;
};
