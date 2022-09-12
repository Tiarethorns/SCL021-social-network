import { createUser } from "../lib/authService.js";
import { onNavigate } from "../main.js";

export const register = () => {
  const registro = document.createElement("div");

  const Box = document.createElement("div");
  Box.className = "boxPrincipal";
  registro.appendChild(Box);

  const registerText = document.createElement("p");
  registerText.className = "text";
  registerText.innerHTML =
    "Deja los datos solicitados a continuación y ya podrás formar parte de COFFEGRAM ";
  Box.appendChild(registerText);

  const username = document.createElement("input");
  username.className = "input";
  username.setAttribute("placeholder", "username");
  Box.appendChild(username);

  const mail = document.createElement("input");
  mail.className = "input";
  mail.setAttribute("placeholder", "Mail");
  Box.appendChild(mail);

  const password = document.createElement("input");
  password.className = "input";
  password.type = "password";
  password.setAttribute("placeholder", "Password");
  Box.appendChild(password);

  const btnRegister = document.createElement("button");
  btnRegister.innerHTML = "Registrate";
  btnRegister.className = "btnRegister";
  btnRegister.addEventListener("click", function () {
    document.getElementsByClassName = "btnRegister";
    document.getElementById("root").innerHTML = "";
    createUser(mail.value, password.value).then(() => {
      onNavigate("/muro");
    });
  });
  Box.appendChild(btnRegister);

  return registro;
};
