document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "fries",
      img: "../public/images/coronaMemory/fries.png",
    },
    {
      name: "cheeseburger",
      img: "../public/images/coronaMemory/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "../public/images/coronaMemory/ice-cream.png",
    },
    {
      name: "pizza",
      img: "../public/images/coronaMemory/pizza.png",
    },
    {
      name: "milkshake",
      img: "../public/images/coronaMemory/milkshake.png",
    },
    {
      name: "hotdog",
      img: "../public/images/coronaMemory/hotdog.png",
    },
    {
      name: "Joker",
      img: "../public/images/coronaMemory/joker.png",
    },
    {
      name: "fries",
      img: "../public/images/coronaMemory/fries.png",
    },
    {
      name: "cheeseburger",
      img: "../public/images/coronaMemory/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "../public/images/coronaMemory/ice-cream.png",
    },
    {
      name: "pizza",
      img: "../public/images/coronaMemory/pizza.png",
    },
    {
      name: "milkshake",
      img: "../public/images/coronaMemory/milkshake.png",
    },
    {
      name: "hotdog",
      img: "../public/images/coronaMemory/hotdog.png",
    },
    {
      name: "Joker",
      img: "../public/images/coronaMemory/joker.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "../public/images/coronaMemory/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    var textOp = document.querySelector("textOutput");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0]!=cardsChosenId[1]) {
      //alert("You found a match");
      //textOp.textContent = "You found a match";

      cards[optionOneId].setAttribute(
        "src",
        "../public/images/coronaMemory/white.png"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "../public/images/coronaMemory/white.png"
      );
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute(
        "src",
        "../public/images/coronaMemory/blank.png"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "../public/images/coronaMemory/blank.png"
      );
      //alert("Sorry, try again");
      //textOp.textContent = "sorry try again";
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
