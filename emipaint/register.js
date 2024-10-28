// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBLEHh8NIUFtOwjzwpxSOI9l3aM-4Hx_jY",
  authDomain: "tyrfingdb.firebaseapp.com",
  databaseURL:
    "https://tyrfingdb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tyrfingdb",
  storageBucket: "tyrfingdb.appspot.com",
  messagingSenderId: "116656638998",
  appId: "1:116656638998:web:12d692fb8b3ee09aebf937",
  measurementId: "G-T7N44V1950",
};

firebase.initializeApp(firebaseConfig);
//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud / """"table""""" users
const usersRef = dbRef.child("users");

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

const formUserUI = document.getElementById("add-user-form");
formUserUI.addEventListener("submit", (event) => event.preventDefault());

const userListUI = document.getElementById("user-list");

function addUserBtnClicked() {
  //on vérifie que l'affichage est vide et on le vide si ce n'ets pas le cas
  userListUI.innerHTML = "";
  //* Ensuite on Récupère les 3 inputs (pour renseigner un nom, un age, un mail)
  const addUserInputsUI = document.getElementsByClassName("user-input");
  console.log(addUserInputsUI);
  //* On crée un objet (vide pour le moment) va stocker les infos du nouvel utilisateur
  let newUser = {};
  //* On fait une boucle pour récupérer les valeurs de chaque input dans le formulaire
  for (let i = 0; i < addUserInputsUI.length; i++) {
    //* Ci dessous on récupère les key et value (on a des attributs data-key déjà placé en html)
    let key = addUserInputsUI[i].getAttribute("data-key");
    //* Pour chaque input on récupère la value.
    let value = addUserInputsUI[i].value;
    //* Pour chaque CLé (age, name, et email on les associe à notre nouvel utilisateur)
    newUser[key] = value;
  }
  //* Enfin on ajoute notre nouvel utilisateur dans la BDD avec .push()
  usersRef.push(newUser);
  console.log("New User SAVED");
  console.log(`${newUser.username} il a ${newUser.age} ans`);

  //* Pour + de confort on reset le formulaire une fois qu'on a ajouté un user
  formUserUI.reset();

  let $li = document.createElement("li");

  $li.innerText = `bienvenue sur EmiPaint ${newUser.username} ! Tu peux te connecter!`;
  $li.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center testli"
  );
  //* À la lecture de chaque utilisateur on le rend clickable pour afficher les détails
  userListUI.append($li);
}

function deleteButtonClicked(event) {
  console.log(event);
  let userID = event.target.getAttribute("userid");
  const userRef = dbRef.child("users/" + userID);
  userRef.remove();
}
