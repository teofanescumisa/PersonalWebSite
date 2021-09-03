/*
American Poker 90` 
Made By Teofanescu Misha
*/
function americanPoker90 () {
newProject();
let pokerDeck = [];
let HandCard1;
let HandCard2;
let HandCard3;
let HandCard4;
let HandCard5;

    const payTable = document.createElement("div");
          payTable.className = "payTableContainer flex-column display";
function createPayingSection (textcontent,score,id) {
    const paySection = document.createElement("section");
          paySection.className = "flex-rows content-space-between";
    const payName = document.createElement("p");
          payName.textContent = textcontent;
    paySection.appendChild(payName);
    const payScore = document.createElement("p");
          payScore.textContent = score;
          payScore.id = id;
    paySection.appendChild(payScore);
    payTable.appendChild(paySection);
}
createPayingSection("ROYAL FLUSH","300","royalFlush");
createPayingSection("STR FLUSH","80","strFlush");
createPayingSection("4 OF A KIND","40","4ofkind");
createPayingSection("FULL HOUSE","12","fullHouse");
createPayingSection("FLUSH","9","flush");
createPayingSection("STRAIGHT","7","straight");
createPayingSection("3 OF A KIND","5","3ofkind");
createPayingSection("2 PAIR","3","2pair");
    const gameInfo = document.createElement("div");
          gameInfo.className = "flex-rows content-space-between display";
    const scoreText = document.createElement("p");
          scoreText.textContent = "Points :";
    const scorePoints = document.createElement("span");
          scorePoints.textContent = "200";
scoreText.appendChild(scorePoints);
gameInfo.appendChild(scoreText);
    const gameButton = document.createElement("button");
          gameButton.className = "pokerGameButton";
          gameButton.textContent = "Start Game";
          gameButton.onclick = startGamePlay;
gameInfo.appendChild(gameButton);
    const betContainer = document.createElement("section");
          betContainer.className = "flex-rows";
    const betText = document.createElement("p");
          betText.textContent = "BET";
          betText.className = "PokerBetButton";
betContainer.appendChild(betText);
    const downArrow = document.createElement("img");
          downArrow.className = "pokerArrowButton";
          downArrow.alt = "Bet Lower Button";
          downArrow.src = "./img/buttons/downArrow.svg";
          downArrow.onclick = downArrowClick;
betContainer.appendChild(downArrow);
    const betPoints = document.createElement("p");
          betPoints.className = "PokerBetButton";
          betPoints.textContent = "1";
betContainer.appendChild(betPoints);
    const upArrow = document.createElement("img");
          upArrow.className = "pokerArrowButton";
          upArrow.alt = "Bet Highter Button";
          upArrow.src = "./img/buttons/upArrow.svg";
          upArrow.onclick = upArrowClick;
betContainer.appendChild(upArrow);
gameInfo.appendChild(betContainer);
    const gameInfoText = document.createElement("p");
          gameInfoText.className = "text-center display pokerText";
          gameInfoText.textContent = "Select your BET then press Start Game !";
    const deckContainer = document.createElement("div");
          deckContainer.className = "flex-rows content-space-around display";
function createNewCardHand () {
    const cardContainer = document.createElement("section");
    const cardHoldText = document.createElement("p");
          cardHoldText.className = "text-center";
          cardHoldText.textContent = "HOLD";
          cardHoldText.style.display = "none";
    cardContainer.appendChild(cardHoldText);
    const cardHoldImg = document.createElement("img");
          cardHoldImg.onclick = holdCard;
          cardHoldImg.className = "pokerCardImg";
          cardHoldImg.alt = "Back Of a Card Deck";
          cardHoldImg.src = "./img/cardDeck/Deck.jpg";
    cardContainer.appendChild(cardHoldImg);
    deckContainer.appendChild(cardContainer);
}
createNewCardHand();
createNewCardHand();
createNewCardHand();
createNewCardHand();
createNewCardHand();

const HandCardImg1 = deckContainer.children[0].children[1];
const HoldCard1 = deckContainer.children[0].children[0];

const HandCardImg2 = deckContainer.children[1].children[1];
const HoldCard2 = deckContainer.children[1].children[0];

const HandCardImg3 = deckContainer.children[2].children[1];
const HoldCard3 = deckContainer.children[2].children[0];

const HandCardImg4 = deckContainer.children[3].children[1];
const HoldCard4 = deckContainer.children[3].children[0];

const HandCardImg5 = deckContainer.children[4].children[1];
const HoldCard5 = deckContainer.children[4].children[0];


function holdCard (e) {
    if (gameButton.textContent == "Exchange Cards") {
    if (e.target.parentNode.children[0].style.display == "none") {
        e.target.parentNode.children[0].style.display = "block";
    } else {
        e.target.parentNode.children[0].style.display = "none";
    };}
};
function refreshPoints () {
    document.getElementById("royalFlush").textContent = 300 * +betPoints.textContent ;
    document.getElementById("strFlush").textContent = 80 * +betPoints.textContent ;
    document.getElementById("4ofkind").textContent = 40 * +betPoints.textContent ;
    document.getElementById("fullHouse").textContent = 12 * +betPoints.textContent ;
    document.getElementById("flush").textContent = 9 * +betPoints.textContent ;
    document.getElementById("straight").textContent = 7 * +betPoints.textContent ;
    document.getElementById("3ofkind").textContent = 5 * +betPoints.textContent ;
    document.getElementById("2pair").textContent = 3 * +betPoints.textContent ;
}
function upArrowClick () {
    if(gameButton.textContent == "Start Game" && +betPoints.textContent < 10){
        betPoints.textContent = +betPoints.textContent +1
        refreshPoints();
    }
};
function downArrowClick () {
    if (gameButton.textContent == "Start Game" && +betPoints.textContent >1) {
        betPoints.textContent = +betPoints.textContent -1
        refreshPoints();
    }
};
function exchangeCards () {
    if(HandCardImg1.src == "./img/cardDeck/Deck.jpg" || HoldCard1.style.display == "none"){
        const randomCard = Math.floor((Math.random() * (pokerDeck.length)));
        HandCard1 = pokerDeck.splice(randomCard,1);
        HandCardImg1.src = HandCard1[0].link;
        HandCardImg1.alt = HandCard1[0].name;
    }
    if(HandCardImg2.src == "./img/cardDeck/Deck.jpg" || HoldCard2.style.display == "none"){
        const randomCard = Math.floor((Math.random() * (pokerDeck.length)));
        HandCard2 = pokerDeck.splice(randomCard,1);
        HandCardImg2.src = HandCard2[0].link;
        HandCardImg2.alt = HandCard2[0].name;
    }
    if(HandCardImg3.src == "./img/cardDeck/Deck.jpg" || HoldCard3.style.display == "none"){
        const randomCard = Math.floor((Math.random() * (pokerDeck.length)));
        HandCard3 = pokerDeck.splice(randomCard,1);
        HandCardImg3.src = HandCard3[0].link;
        HandCardImg3.alt = HandCard3[0].name;
    }
    if(HandCardImg4.src == "./img/cardDeck/Deck.jpg" || HoldCard4.style.display == "none"){
        const randomCard = Math.floor((Math.random() * (pokerDeck.length)));
        HandCard4 = pokerDeck.splice(randomCard,1);
        HandCardImg4.src = HandCard4[0].link;
        HandCardImg4.alt = HandCard4[0].name;
    }
    if(HandCardImg5.src == "./img/cardDeck/Deck.jpg" || HoldCard5.style.display == "none"){
        const randomCard = Math.floor((Math.random() * (pokerDeck.length)));
        HandCard5 = pokerDeck.splice(randomCard,1);
        HandCardImg5.src = HandCard5[0].link;
        HandCardImg5.alt = HandCard5[0].name;
    }
}
function checkGame () {
    const handCards = [];
    handCards.push(HandCard1[0].value);
    handCards.push(HandCard2[0].value);
    handCards.push(HandCard3[0].value);
    handCards.push(HandCard4[0].value);
    handCards.push(HandCard5[0].value);
    handCards.sort();
    const cardtype1 = HandCard1[0].type;
    const cardtype2 = HandCard2[0].type;
    const cardtype3 = HandCard3[0].type;
    const cardtype4 = HandCard4[0].type;
    const cardtype5 = HandCard5[0].type;
    
    if (cardtype1 == cardtype2 && cardtype1 == cardtype3 && cardtype1 == cardtype4 && cardtype1 == cardtype5) {
        if (handCards[0] === "10" && handCards[1] === "11" && handCards[2] === "12" && handCards[3] === "13" && handCards[4] === "14") {
           gameInfoText.textContent = `You Have ROYAL FLUSH and win ${document.getElementById("royalFlush").textContent} Points`;
           scorePoints.textContent = +scorePoints.textContent + +document.getElementById("royalFlush").textContent;
        }else if (+handCards[0] == +handCards[1]-1 && +handCards[1] == +handCards[2]-1 && +handCards[2] == +handCards[3]-1 && +handCards[3] == +handCards[4]-1 ) {
           gameInfoText.textContent = `You Have STR Flush and win ${document.getElementById("strFlush").textContent} Points`;
           scorePoints.textContent = +scorePoints.textContent + +document.getElementById("strFlush").textContent;
        }
        gameInfoText.textContent = `You Have FLUSH and win ${document.getElementById("flush").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("flush").textContent;    
    } else if (handCards[0] == handCards[1] && handCards[0] == handCards[2] && handCards[0] == handCards[3]) {
        gameInfoText.textContent = `You Have 4 OF A KIND and win ${document.getElementById("4ofkind").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("4ofkind").textContent;  
    } else if (handCards[1] == handCards[2] && handCards[1] == handCards[3] && handCards[1] == handCards[4]) {
        gameInfoText.textContent = `You Have 4 OF A KIND and win ${document.getElementById("4ofkind").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("4ofkind").textContent;  
    }else if (handCards[0] == handCards[1] && handCards[0] == handCards[2] && handCards[3] == handCards[4]) {
        gameInfoText.textContent = `You Have FULL HOUSE and win ${document.getElementById("fullHouse").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("fullHouse").textContent; 
    }  else if (handCards[0] == handCards[1] && handCards[2] == handCards[3] && handCards[2] == handCards[4]) {
        gameInfoText.textContent = `You Have FULL HOUSE and win ${document.getElementById("fullHouse").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("fullHouse").textContent; 
    } else if (+handCards[0] == +handCards[1]-1 && +handCards[1] == +handCards[2]-1 && +handCards[2] == +handCards[3]-1 && +handCards[3] == +handCards[4]-1) {
        gameInfoText.textContent = `You Have STRAIGHT and win ${document.getElementById("straight").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("straight").textContent;
    } else if(handCards[0] == "02" && handCards[1] == "03" && handCards[2] == "04" && handCards[3] == "05" && handCards[4] == "14") {
        gameInfoText.textContent = `You Have STRAIGHT and win ${document.getElementById("straight").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("straight").textContent;
    } else if (handCards[0] == handCards[1] && handCards[0] == handCards[2]) {
        gameInfoText.textContent = `You Have 3 OF A KIND and win ${document.getElementById("3ofkind").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("3ofkind").textContent; 
    } else if (handCards[1] == handCards[2] && handCards[1] == handCards[3] ) {
        gameInfoText.textContent = `You Have 3 OF A KIND and win ${document.getElementById("3ofkind").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("3ofkind").textContent; 
    } else if (handCards[2] == handCards[3] && handCards[2] == handCards[4]) {
        gameInfoText.textContent = `You Have 3 OF A KIND and win ${document.getElementById("3ofkind").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("3ofkind").textContent;
    } else if (handCards[0] == handCards[1] && handCards[2] == handCards[3]) {
        gameInfoText.textContent = `You Have 2 PAIR and win ${document.getElementById("2pair").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("2pair").textContent;
    } else if (handCards[1] == handCards[2] && handCards[3] == handCards[4]) {
        gameInfoText.textContent = `You Have 2 PAIR and win ${document.getElementById("2pair").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("2pair").textContent;
    } else if (handCards[0] == handCards[1] && handCards[3] == handCards[4]) {
        gameInfoText.textContent = `You Have 2 PAIR and win ${document.getElementById("2pair").textContent} Points`;
        scorePoints.textContent = +scorePoints.textContent + +document.getElementById("2pair").textContent;
    } else {
        gameInfoText.textContent = "You Lose ! Try again";
    }
};
function startGamePlay () {
    if (gameButton.textContent == "Start Game") {
        pokerDeck.length = 0;
        pokerDeck.push(...fullCardDeck);
        if(+scorePoints.textContent  >= +betPoints.textContent ) {
            gameInfoText.textContent = "Click on the card to hold it to next game ";
            gameButton.textContent = "Exchange Cards";
            scorePoints.textContent = +scorePoints.textContent - +betPoints.textContent;
            exchangeCards();
        } else if (+scorePoints.textContent ==0) {
            scorePoints.textContent = 100;
        } else {
            gameInfoText.textContent = "The selected BET is highter than your Points ! ! !";
        }

    } else if (gameButton.textContent == "Exchange Cards") {
        exchangeCards();
        gameButton.textContent = "Start a New Game";
        for(let i=0; i<5 ; i++){
            deckContainer.children[i].children[0].style.display = "none";
        }
        checkGame();
    } else if (gameButton.textContent == "Start a New Game") {
        for (let i=0 ; i<5 ; i++) {
            deckContainer.children[i].children[1].src = "./img/cardDeck/Deck.jpg";
            deckContainer.children[i].children[1].alt = "Back of Card Deck";
        }
        gameInfoText.textContent = "Select your BET then press Start Game !";
        gameButton.textContent = "Start Game";
    }
};
root.appendChild(payTable);
root.appendChild(gameInfo);
root.appendChild(gameInfoText);
root.appendChild(deckContainer);
};