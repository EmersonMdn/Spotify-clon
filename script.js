const topBar = document.querySelector(".topbar");

//Cambiar opacidad del topbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    topBar.classList.add("transparent");
  } else {
    topBar.classList.remove("transparent");
  }
});

//nueva variable para almacenar altura del topBar

let topBarHeight = topBar.offsetHeight;
//Añadimos un padding trop basado en la altura del topBar

const mainContent = document.querySelector(".main-content");
mainContent.style.paddingTop = `${topBarHeight + 10}px `;

/** BOTON PLAY */

const containerConcentracion = document.querySelectorAll(".card-concentracion");
const containerSpotifyPlaylist = document.querySelectorAll(
  ".card-spotify-playlists"
);

//Funcion  que se va a repetir

const createButton = (card) => {
  //create button
  const button = document.createElement("button");
  button.innerHTML = '<i class="fa-solid fa-play"></i>';

  card.appendChild(button);

  button.style.display = "none";
  button.classList.add("btn-play");

  card.onmouseover = () => {
    button.style.display = "block";
    button.style.animationName = "button-entrance";
    button.style.animationDuration = "500ms";
  };
  card.onmouseleave = () => {
    button.style.display = "none";
  };
};

containerConcentracion.forEach((card) => {
  createButton(card);
});
containerSpotifyPlaylist.forEach((card) => {
  createButton(card);
});
