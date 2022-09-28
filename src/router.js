import { login } from "./vistas/vistaLogin.js";
import { muro } from "./vistas/vistaMuro.js";
import { register } from "./vistas/vistaRegister.js";
import { contrasena } from "./vistas/vistaContrasena.js";
import { vistaPost } from "./vistas/vistaPost.js";

export const routes = {
  "/": login(),
  "/register": register(),
  "/muro": muro(),
  "/contrasena": contrasena(),
  "/vistaPost": vistaPost(),
};
