import logo from "../src/logo.png";
export function moduleHeaderEP() {
  if (document.getElementById("headEP")) {
    document.querySelector("header").innerHTML = `
      <nav class="navbar navbar-expand-lg d-flex flex-row">
        <div class="container-fluid" id="header1">
          <a class="navbar-brand pc" href="./index.html"
            ><img id="logo" src="${logo}" alt="logo"
          /></a>
        </div>
        <div class="container-fluid d-flex flex-column" id="header2">
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" id="spanheader"></span>
          </button>
          
          <div
            class="collapse navbar-collapse customnav"
            id="navbarSupportedContent"
          >
            <ul id="mynavbar" class="navbar-nav me-auto mb-2">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./galerie.html">Galerie</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about.html">À Propos</a>
              </li>
              <li class="nav-item">
                <a id="register" class="nav-link" href="./register.html">S'enregistrer</a>
              </li>
              <li class="nav-item">
                <a id="connect" class="nav-link" href="./connect.html">Se connecter</a>
              </li>
            </ul>
          </div>
        </div>
        <h1>The Painting world of Emi</h1>
      </nav>
`;
  }
}
