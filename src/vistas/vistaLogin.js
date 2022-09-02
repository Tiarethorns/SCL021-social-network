export const login = () => {
  const logearse = document.createElement("div");

  logearse.className = "container-login";
  // logearse.textContent = "este es el login!";
  //console.log(logearse);

  const logo = document.createElement("img");
  logo.src = "./img/logo.png";
  logo.className = "logo";
  logearse.appendChild(logo);

  const logBox = document.createElement("div");
  logBox.className = "logBox";
  /*logBox.style.border = "1px solid red";
  logBox.style.width = "500px";
  logBox.style.borderRadius = "5px";
  logBox.style.display = "flex";*/

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
  btnLog.textContent = "Log In";
  logBox.appendChild(btnLog);

  const psText = document.createElement("p");
  psText.className = "logText";
  psText.innerHTML =
    "¿Olvidaste tu contraseña? <a href='#muro'> Haz click aquí </a><br> <a href='#register'>Crea tu cuenta</a>";
  logBox.appendChild(psText);

  /*const creacta = document.createElement("p");
  creacta.className = "creacta";
  creacta.textContent = "Crea tu cuenta";
  logBox.appendChild(creacta);*/

  const btngoogle = document.createElement("div");
  btngoogle.className = "btngoogle";
  btngoogle.innerHTML = "<a href='#muro'> Ingresa con tu cuenta de Google</a>";
  logearse.appendChild(btngoogle);

  const imgGgle = document.createElement("img");
  imgGgle.className = "imgoGgle";
  imgGgle.src = "./img/google.png";
  btngoogle.appendChild(imgGgle);

  const cafeDiv = document.createElement("div");
  cafeDiv.className = "cafeDiv";
  logearse.appendChild(cafeDiv);
  /*const granosCafe = document.createElement("img");
  granosCafe.src = "./img/granoscafe.png";
  granosCafe.className = "granos";
  cafeDiv.appendChild(granosCafe);*/

  return logearse;
};
