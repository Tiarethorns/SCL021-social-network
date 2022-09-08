import { routes } from "./router.js";

export const rootDiv = document.getElementById("root");
rootDiv.appendChild(routes[window.location.pathname]);

// method that takes and render section according to it
const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  window.location.hash = "";
  rootDiv.replaceChildren(routes[pathname]);
};

// repeat for other routes also.
window.onpopstate = () => {
  rootDiv.replaceChildren(routes[window.location.pathname]);
};

export { onNavigate };
