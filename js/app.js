// taches a faire :

// - sur les boutons quand l'utilisateur choisis des themes , mettre une classe dessus
// - recuperer la valeur donné par l'utilisateur pour le timer afin de l'afficher sur la page game
// - sur les boutons de lettre , lorsqu'il en appuye sur un tous les autres ont une opacité divisé de moitié
// - stocker des reponses dans un fichier json au préalable

// déclaré les fonctions besoins :

const categoriesArrayKey = [];
const startGame = document.querySelector("#start");
const pathName = window.location.pathname;
const page = pathName.substr(pathName.lastIndexOf("/") + 1);
//console.log(page);

if (page === "game.html") {
  const displayCategory = localStorage.getItem("categoriesArrayKey");
  //const id = querySelector("[data-id]");
  const flex = document.querySelector(".d-flex");

  displayCategory.split(",").forEach((item) => {
    console.log(item);
    let fatherCreateInput = document.createElement("div");
    fatherCreateInput.classList.add("rPosition");
    flex.appendChild(fatherCreateInput);

    let createInput = document.createElement("input");
    createInput.classList.add("aPosition", "inputHover");
    createInput.setAttribute("for", item);
    createInput.setAttribute("required", "");
    fatherCreateInput.appendChild(createInput);

    let createLabel = document.createElement("label");
    createLabel.classList.add("aPosition", "labelFocus");
    createLabel.innerHTML = item;
    createLabel.setAttribute("id", item);
    fatherCreateInput.appendChild(createLabel);
  });
  //console.log(displayCategory)
}

if (page === "setup-game.html") {
  startGame.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("categoriesArrayKey", categoriesArrayKey);
    window.location = "game.html";
    console.log(window.location.pathname);
    categoriesArrayKey.split("");
  });

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
      const id = item.dataset.id;
      //console.log(id);
      let stockageItem = localStorage.getItem(item.innerHTML);
      //console.log(stockageItem);
      if (stockageItem === null) {
        categoriesArrayKey.push(id);
        console.log(categoriesArrayKey);
        //console.log("test");
      } else {
        //displayButton();
      }
    } else {
      //je remove mon element du tableau
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

    const Pays = localStorage.getItem("Pays");
    const marque = localStorage.getItem("marque");
    const celebrite = localStorage.getItem("celebrite");
    const prenom = localStorage.getItem("prenom");
    const animal = localStorage.getItem("animal");
    const aliment = localStorage.getItem("aliment");

    idCategoryDisplay.forEach((item) => {
      if (
        item.value === Pays ||
        marque ||
        celebrite ||
        prenom ||
        animal ||
        aliment
      ) {
        item.parentElement.classList.add("buttonChoose");
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
}
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
