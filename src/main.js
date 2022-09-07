import { routes } from "./router.js";
//import { login } from "./vistas/vistaLogin.js";
//import { muro } from "./vistas/vistaMuro.js";
//import { register } from "./vistas/vistaRegister.js";

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

// method that takes and render section according to it
const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = [pathname];
};

// repeat for other routes also.
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

export { onNavigate };
