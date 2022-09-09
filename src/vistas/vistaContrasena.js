export const contrasena = () => {
  const olividasteCon = document.createElement("div");

  const Box = document.createElement("div");
  Box.className = "boxPrincipal";
  olividasteCon.appendChild(Box);

  const contrasenaText = document.createElement("p");
  contrasenaText.className = "text";
  contrasenaText.innerHTML =
    "Si olvidaste tu contraseña dejanos el correo eléctronico con el cual te hayas registrado para enviartela ";
  Box.appendChild(contrasenaText);

  const imgCandado = document.createElement("img");
  imgCandado.src = "./img/candado.png";
  imgCandado.className = "icono";
  Box.appendChild(imgCandado);

  const inputContraseña = document.createElement("input");
  inputContraseña.className = "input";
  Box.appendChild(inputContraseña);

  const btnRegistro = document.createElement("button");
  btnRegistro.className = "boton";
  btnRegistro.textContent = "Enviar";
  olividasteCon.appendChild(btnRegistro);

  return olividasteCon;
};
