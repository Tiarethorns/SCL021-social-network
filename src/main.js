// Este es el punto de entrada de tu aplicacion

import { myFunction } from "./lib/index.js";
import { register } from "./vistas/vistaRegister.js";
import { login } from "./vistas/vistaLogin.js";
import { muro } from "./vistas/vistaMuro.js";
myFunction();

//document.getElementById("root").append(register());
document.getElementById("root").append(login());

//document.getElementById("root").append(muro());
window.addEventListener("hashchange", () => {
  console.log(window.location.hash); //escoger ruta segun esta variable
  //document.getElementById("root").innerHTML = "";
  document.getElementById("root").replaceChildren(muro());
  document.getElementById("root").replaceChildren(register());
});
