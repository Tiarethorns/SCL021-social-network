export const register = () => {
  const registro = document.createElement("div");

  const logo = document.createElement("img");
  logo.src = "./img/logo.png";
  logo.className = "logo";
  registro.appendChild(logo);

  const Box = document.createElement("div");
  Box.className = "Box";
  registro.appendChild(Box);

  const registerText = document.createElement("p");
  registerText.innerHTML =
    "Deja los datos solicitados a continuación y ya podrás formar parte de COFFEGRAM ";
  Box.appendChild(registerText);

  const imgRegister = document.createElement("img");
  imgRegister.className = "imgregister";
  imgRegister.src = "./img/register.png";
  Box.appendChild(imgRegister);

  const username = document.createElement("input");
  username.className = "username";
  username.setAttribute("placeholder", "username");
  Box.appendChild(username);

  const mail = document.createElement("input");
  mail.className = "mail";
  mail.setAttribute("placeholder", "Mail");
  Box.appendChild(mail);

  const password = document.createElement("input");
  password.className = "password";
  password.type = "password";
  password.setAttribute("placeholder", "Password");
  Box.appendChild(password);

  const btnRegister = document.createElement("button");
  /*btnRegister.textContent = "Registrate";*/
  btnRegister.innerHTML = "Registrate";
  btnRegister.className = "btnRegister";
  Box.appendChild(btnRegister);

  const cafeDiv = document.createElement("div");
  cafeDiv.className = "cafeDiv";
  registro.appendChild(cafeDiv);

  return registro;
};
