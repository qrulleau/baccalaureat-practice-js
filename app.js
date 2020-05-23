// taches a faire :

// - sur les boutons quand l'utilisateur choisis des themes , mettre une classe dessus
// - recuperer la valeur donné par l'utilisateur pour le timer afin de l'afficher sur la page game
// - sur les boutons de lettre , lorsqu'il en appuye sur un tous les autres ont une opacité divisé de moitié
// - stocker des reponses dans un fichier json au préalable

// déclaré les fonctions besoins :

//timer
let timer = document.querySelector("input.timer");
let valuetimer = timer.value;
console.log(valuetimer);

//bouton
document.addEventListener("click", categoryChoise);

function grabTimer() {
  let parentDisplay = document.querySelector("span");
  console.log(parentDisplay);
  //valuetimer;
}

grabTimer();
