/*
Highter and Lower Game 
Made By Teofanescu Misa
*/

function highterAndLowerGame () {
newProject();
let gameCardDeck =[];
    gameCardDeck.push(...fullCardDeck);
let firstHandCard;
let secoundHandCard;

    const scoreContainer = document.createElement("div");
          scoreContainer.className = "flex-rows content-space-around higerAndLowerTextSize";
    const winText = document.createElement("p");
          winText.textContent = "Wins :";
    const winScore = document.createElement("span");
          winScore.textContent = "0";
winText.appendChild(winScore);
scoreContainer.appendChild(winText);
    const DrowText = document.createElement("p");
          DrowText.textContent = "Drow :";
    const drowScore = document.createElement("span");
          drowScore.textContent = "0";
DrowText.appendChild(drowScore);
scoreContainer.appendChild(DrowText);
    const loseText = document.createElement("p");
          loseText.textContent = "Lose :";
    const loseScore = document.createElement("span");
          loseScore.textContent = "0";
loseText.appendChild(loseScore);
scoreContainer.appendChild(loseText);
root.appendChild(scoreContainer);
    const gameInformationContainer = document.createElement("div");
          gameInformationContainer.className = "text-center flex-column";
    const infoText = document.createElement("p");
          infoText.className = "higerAndLowerTextSize";
          infoText.textContent = "Game Information";
gameInformationContainer.appendChild(infoText);
    const gameRull = document.createElement("ul");
          gameRull.className = "higerAndLowerGameInformation higerAndLowerTextSize";
    function createNewLi (text) {
        const li = document.createElement("li");
            li.textContent = text;
        gameRull.appendChild(li);
    }
    createNewLi("Game will pick a random card from Card Deck.");
    createNewLi("You need to guess the next card will be pick from the deck will be higher or lower than the card already pick.");
    createNewLi("If you guess right or not, the new card pick will be the card you will compaire in future game.");
    createNewLi("The game will keep track of your score of Win / Draw / Lose.");
    createNewLi("The game will not save the score in your PC, every time you load game the stats will be reset.");
    createNewLi("There is 52 cards on deck and when there will be 0 card in deck the game add a new full deck with 52 cards.");
gameInformationContainer.appendChild(gameRull);
root.appendChild(gameInformationContainer);
    const gameTextInteraction = document.createElement("p");
          gameTextInteraction.textContent = "Click to Start a New Game";
          gameTextInteraction.className = "text-center higerAndLowerTextSize";
root.appendChild(gameTextInteraction);

    const cardsContainer = document.createElement("div");
          cardsContainer.className = "flex-rows higerAndLowerGameContainer";
    const firstCard = document.createElement("img");
          firstCard.className = "hightAndLowerImg";
          firstCard.alt = "Back of Deck Card";
          firstCard.src = "./img/cardDeck/Deck.jpg";
cardsContainer.appendChild(firstCard);
    const buttonContainer = document.createElement("section");
          buttonContainer.className = "flex-column";
    const higherButton = document.createElement("button");
          higherButton.className = "higherAndLowerButton navigationBtn border-40";
          higherButton.textContent = "Higher";
          higherButton.style.display = "none";
          higherButton.onclick = gameHigherButton;
buttonContainer.appendChild(higherButton);
    const newGameButton = document.createElement("button");
          newGameButton.className = "higherAndLowerButton navigationBtn border-50";
          newGameButton.textContent = "New Game";
          newGameButton.style.display = "block";
          newGameButton.onclick = newGameMechanism;
buttonContainer.appendChild(newGameButton);
    const lowerButton = document.createElement("button");
          lowerButton.textContent = "Lower";
          lowerButton.className = "higherAndLowerButton navigationBtn border-40";
          lowerButton.style.display = "none";
          lowerButton.onclick = gameLowerButton;
buttonContainer.appendChild(lowerButton);
cardsContainer.appendChild(buttonContainer);
    const secondCard = document.createElement("img");
          secondCard.className = "hightAndLowerImg";
          secondCard.alt = "Back of Deck Card";
          secondCard.src = "./img/cardDeck/Deck.jpg";
cardsContainer.appendChild(secondCard);
root.appendChild(cardsContainer);


function newGameMechanism () {
        if(newGameButton.textContent === "New Game") {
        const randomCard = Math.floor((Math.random() * (gameCardDeck.length)));
        secoundHandCard = gameCardDeck.splice(randomCard,1);
        secoundHandCard[0].index = randomCard;
        
        gameTextInteraction.textContent = `The next card will be Higher or Lower than ${secoundHandCard[0].name}`
        secondCard.src = secoundHandCard[0].link;
        secondCard.alt = secoundHandCard[0].name;
        newGameButton.style.display = "none";
        higherButton.style.display = "block";
        lowerButton.style.display = "block";
        }
        if(newGameButton.textContent === "Play Again" && gameCardDeck.length > 0) {
            secondCard.src = firstCard.src;
            secoundHandCard = firstHandCard;

            firstCard.src = "./img/cardDeck/Deck.jpg";
            gameTextInteraction.textContent = `The next card will be Higher or Lower than ${secoundHandCard[0].name}`
            newGameButton.style.display = "none";
            higherButton.style.display = "block";
            lowerButton.style.display = "block";
            newGameButton.textContent = "New Game";
        } else if (gameCardDeck.length == 0){
            gameCardDeck.push(...fullCardDeck);
            for (let i = 0 ; i < gameCardDeck.length; i++) {
                if(gameCardDeck[i] == secoundHandCard[0]) {
                        secoundHandCard = gameCardDeck.splice(i,1); 
                }
            }
            secondCard.src = firstCard.src;
            secoundHandCard = firstHandCard;
            firstCard.src = "./img/cardDeck/Deck.jpg";
            newGameButton.style.display = "none";
            higherButton.style.display = "block";
            lowerButton.style.display = "block";
            newGameButton.textContent = "New Game";
        }
    }
function gameHigherButton () {
    if(higherButton.textContent === "Higher") {
    const randomCard = Math.floor((Math.random() * (gameCardDeck.length)));
    firstHandCard = gameCardDeck.splice(randomCard,1);
    firstHandCard[0].index = randomCard;
    firstCard.src = firstHandCard[0].link;        

    if (+firstHandCard[0].value > +secoundHandCard[0].value) {
        gameTextInteraction.textContent = `You Win ! The ${firstHandCard[0].name} is higher than ${secoundHandCard[0].name}`
        winScore.textContent = +winScore.textContent + 1;
        }
    if  (+firstHandCard[0].value < +secoundHandCard[0].value) {
        gameTextInteraction.textContent = `You Lose ! The ${firstHandCard[0].name} is lower than ${secoundHandCard[0].name}`
        loseScore.textContent = +loseScore.textContent + 1;
        }  
    if ((+firstHandCard[0].value == +secoundHandCard[0].value)) {
        gameTextInteraction.textContent = `Its Drow ! The ${firstHandCard[0].name} is the same value with ${secoundHandCard[0].name}`
        drowScore.textContent = +drowScore.textContent +1;
        }

    newGameButton.textContent = "Play Again";
    newGameButton.style.display = "block";
    higherButton.style.display = "none";
    lowerButton.style.display = "none";            
       }
    }
function gameLowerButton () {
    if(lowerButton.textContent === "Lower") {
        const randomCard = Math.floor((Math.random() * (gameCardDeck.length)));
        firstHandCard = gameCardDeck.splice(randomCard,1);
        firstHandCard[0].index = randomCard;
        firstCard.src = firstHandCard[0].link;
  
    if (+firstHandCard[0].value < +secoundHandCard[0].value) {
            gameTextInteraction.textContent = `You Win ! The ${firstHandCard[0].name} is higher than ${secoundHandCard[0].name}`
            winScore.textContent = +winScore.textContent + 1;
            }
    if(+firstHandCard[0].value > +secoundHandCard[0].value){
              gameTextInteraction.textContent = `You Lose ! The ${firstHandCard[0].name} is lower than ${secoundHandCard[0].name}`
              loseScore.textContent = +loseScore.textContent + 1;
        }
    if (+firstHandCard[0].value == +secoundHandCard[0].value) {
              gameTextInteraction.textContent = `Its Draw ! The ${firstHandCard[0].name} is the same value with ${secoundHandCard[0].name}`
              drowScore.textContent = +drowScore.textContent +1;
          }
  
          newGameButton.textContent = "Play Again";
          newGameButton.style.display = "block";
          higherButton.style.display = "none";
          lowerButton.style.display = "none";            
          };
         };
};