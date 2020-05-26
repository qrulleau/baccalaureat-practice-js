// taches a faire :

// - sur les boutons quand l'utilisateur choisis des themes , mettre une classe dessus
// - recuperer la valeur donné par l'utilisateur pour le timer afin de l'afficher sur la page game
// - sur les boutons de lettre , lorsqu'il en appuye sur un tous les autres ont une opacité divisé de moitié
// - stocker des reponses dans un fichier json au préalable

// déclaré les fonctions besoins :

//timer

//bouton
//document.addEventListener("click", categoryChoise);
function selectionCategory() {
  let button = document.querySelectorAll(".category-choise");
  console.log(button);
}

selectionCategory();

function grabTimer() {
  const parentDisplay = document.querySelector("span");
  // console.log(parentDisplay);

  let stockageItem = localStorage.getItem("keyValueTimer");
  if (stockageItem == null) {
    let timer = document.querySelector("input.timer").value;
    //stocker la variable dans le localstorage pour pouvoir l'utiliser sur la page d'apres
    localStorage.setItem("keyValueTimer", timer);
  }
  parentDisplay.innerHTML = " " + stockageItem;
}
grabTimer();
