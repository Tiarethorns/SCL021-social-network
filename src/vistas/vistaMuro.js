export const muro = () => {
  const home = document.createElement("div");

  const logo = document.createElement("img");
  logo.src = "./img/logo.png";
  logo.className = "logo";
  home.appendChild(logo);

  const muroPage = document.createElement("h1");
  muro.textContent = "Este es el muro!";
  home.appendChild(muroPage);

  return home;
};
