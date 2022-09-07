import { loginWithGoogle } from "../lib/authService.js";
import { onNavigate } from "../main.js";
import { register } from "./vistaRegister.js";
/*import { onAuthStateChanged } from "firebase/auth";*/
export const login = () => {
  const logearse = document.createElement("main");

  logearse.className = "container-login";

  const logo = document.createElement("img");
  logo.src = "./img/logo.png";
  logo.className = "logo";
  logearse.appendChild(logo);

  const logBox = document.createElement("div");
  logBox.className = "logBox";
  logearse.appendChild(logBox);

  const userName = document.createElement("p");
  userName.textContent = "Username";
  userName.className = "align";
  logBox.appendChild(userName);

  const inputUserbox = document.createElement("div");
  inputUserbox.className = "fondoinput";
  logBox.appendChild(inputUserbox);

  const uBox = document.createElement("input");
  uBox.className = "uBox";
  inputUserbox.appendChild(uBox);

  const PassWord = document.createElement("p");
  PassWord.textContent = "Password";
  PassWord.className = "align";
  logBox.appendChild(PassWord);

  const inputPassbox = document.createElement("div");
  inputPassbox.className = "fondoinput";
  logBox.appendChild(inputPassbox);

  const psBox = document.createElement("input"); //quiero que esto sea un input clave
  psBox.className = "psBox";
  psBox.type = "password";
  //psBox.style.border = "1px solid red";
  inputPassbox.appendChild(psBox);

  const btnLog = document.createElement("button");
  btnLog.className = "btn-log";
  btnLog.innerText = "Log In";
  btnLog.addEventListener("click", () => {
    onNavigate("/muro");
  });

  /* btnLog.textContent = "Log In";*/

  logBox.appendChild(btnLog);

  const psText = document.createElement("p");
  psText.className = "logText";
  psText.innerHTML =
    "¿Olvidaste tu contraseña? <a href='#muro'> Haz click aquí </a> <br> <a id='link' href='#register'>Crea tu cuenta</a>";
  logBox.appendChild(psText);
  logBox.querySelector("#link").addEventListener("click", () => {
    onNavigate("/register");
  });

  const btngoogle = document.createElement("div");
  btngoogle.className = "btngoogle";
  btngoogle.innerHTML = "Ingresa con tu cuenta de Google";
  btngoogle.addEventListener("click", () => {
    loginWithGoogle();
  });
  logearse.appendChild(btngoogle);

  const imgGgle = document.createElement("img");
  imgGgle.className = "imgoGgle";
  imgGgle.src = "./img/google.png";
  btngoogle.appendChild(imgGgle);

  const cafeDiv = document.createElement("footer");
  cafeDiv.className = "cafeDiv";
  logearse.appendChild(cafeDiv);

  return logearse;
};
