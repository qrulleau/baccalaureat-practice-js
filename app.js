// taches a faire :

// - sur les boutons quand l'utilisateur choisis des themes , mettre une classe dessus
// - recuperer la valeur donné par l'utilisateur pour le timer afin de l'afficher sur la page game
// - sur les boutons de lettre , lorsqu'il en appuye sur un tous les autres ont une opacité divisé de moitié
// - stocker des reponses dans un fichier json au préalable

// déclaré les fonctions besoins :

document.querySelectorAll(".category-choise").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("completed");
  });
});

document.querySelectorAll(".letter-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("completed");
  });
});

function traitementCategoryChoise(item) {
  if (item.classList.contains("completed")) {
    let stockageItem = localStorage.getItem(item.innerHTML);

    if (stockageItem === null) {
      localStorage.setItem(item.innerHTML, item.innerHTML);
    } else {
      console.log("test");
    }
  } else {
    localStorage.removeItem(item.innerHTML);
    //console.log("test perdu");
  }
}

function categoryChoise() {
  document.querySelectorAll(".category-choise").forEach((item) => {
    item.addEventListener("click", (event) => {
      traitementCategoryChoise(item);
      //console.log(event);
    });
  });
}

categoryChoise();

function displayButton() {
  const prenomCategoryDisplay = document.querySelectorAll(".rPosition");
  const idCategoryDisplay = document.querySelectorAll("input");
  const test = localStorage.getItem(
    "Aliment",
    "Pays",
    "Marque",
    "Célébrité",
    "Prénom",
    "Animal"
  );
  console.log(test);
  idCategoryDisplay.forEach((item) => {
    if (idCategoryDisplay.value === test) {
      item.classList.add("test");
    }
  });
}
displayButton();

function grabTimer() {
  const parentDisplay = document.querySelector("span");
  //console.log(parentDisplay);

  let stockageItem = localStorage.getItem("keyValueTimer");
  if (stockageItem === null) {
    let timer = document.querySelector("input.timer").value;
    //stocker la variable dans le localstorage pour pouvoir l'utiliser sur la page d'apres
    localStorage.setItem("keyValueTimer", timer);
  }
  parentDisplay.innerHTML = " " + stockageItem;
}
grabTimer();

///
// const startTime = 0;
// const currentTime = 0;

// function convertSecond(s) {
//   var min = floor(s / 60);
//   var sec = s % 60;
//   return nf(min, 2) + " : " + nf(sec, 2);
// }

// let ding;

// function preload() {
//   ding = loadSound(ding.mp3);
// }

// const params = getURLParams();
// if (params.minute) {
//   var min = params.minute;
//   timeleft = min * 60;
// }
