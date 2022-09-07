import { login } from "./vistas/vistaLogin.js";
import { muro } from "./vistas/vistaMuro.js";
import { register } from "./vistas/vistaRegister.js";
console.log(login);

export const routes = {
  "/": login(),
  "/register": register(),
  "/muro": muro(),
};
