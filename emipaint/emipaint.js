import "./emipaint.css";
import { isConnected } from "/emipaint/isconnected";

const toggler = document.querySelector(".navbar-toggler");
const navContent = document.getElementById("navbarSupportedContent");

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
  navContent.classList.toggle("show");
}

// Fonction pour fermer le menu si on clique en dehors
function closeMenuOnClickOutside(event) {
  if (!navContent.contains(event.target) && !toggler.contains(event.target)) {
    navContent.classList.remove("show");
  }
}

// Ouvrir/fermer le menu avec le bouton
toggler.addEventListener("click", toggleMenu);

// Fermer le menu lorsqu'on clique en dehors
document.addEventListener("click", closeMenuOnClickOutside);

if (isConnected()) {
  let mynavbar = document.getElementById("mynavbar");
  let removeli1 = document.getElementById("register");
  let changeli = document.getElementById("connect");
  mynavbar.removeChild(removeli1);
}
