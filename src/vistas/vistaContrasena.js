import { recuperarCon } from "../lib/authService.js";
import { onNavigate } from "../main.js";

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
  inputContraseña.id = "inputPassword";
  Box.appendChild(inputContraseña);

  const btnRegistro = document.createElement("button");
  btnRegistro.className = "boton";
  btnRegistro.textContent = "Enviar";
  btnRegistro.addEventListener("click", () => {
    //TODO:¨validar antes de llamar la funcion, que el input tenga un correo

    recuperarCon(inputPassword.value)
      .then(() => {
        alert("Se envió un correo de recuperación de clave");
        onNavigate("/login");
      })
      .catch((error) => {
        console.log(error);
        //hacer un alert o texticon
      });
  });

  olividasteCon.appendChild(btnRegistro);

  return olividasteCon;
};
