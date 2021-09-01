/*
X and 0 Game
Made by Teofanescu Misa
*/
function xAnd0Game () {
newProject();
let gameTurn = "Player 1";    
const scoreContainer = document.createElement("section");
      scoreContainer.className = "xAnd0Score";
    const firstPlayer = document.createElement("p");
          firstPlayer.className = "text-red";
          firstPlayer.textContent = "1st Player Wins :";
    const firstPlayerScore = document.createElement("span");
          firstPlayerScore.textContent = "0";
firstPlayer.appendChild(firstPlayerScore);
scoreContainer.appendChild(firstPlayer);
    const drow = document.createElement("p");
          drow.textContent = "Drow :";
    const drowScore = document.createElement("span");
          drowScore.textContent = "0";
drow.appendChild(drowScore);
scoreContainer.appendChild(drow);
    const secoundPlayer = document.createElement("p");
          secoundPlayer.className = "text-blue";
          secoundPlayer.textContent = "2nd Players Wins :"
    const secoundPlayerScore = document.createElement("span");
          secoundPlayerScore.textContent = "0";
secoundPlayer.appendChild(secoundPlayerScore);
scoreContainer.appendChild(secoundPlayer);
    const textContainer = document.createElement("section");
          textContainer.className = "text-center";
    const gameText = document.createElement("p");
          gameText.textContent = "1st Player Turn ! Pick a empty square.";
textContainer.appendChild(gameText);
    const gameContainer = document.createElement("section");
          gameContainer.className = "xAnd0SquareContainer";
          createNewGameSquare("xand1");
          createNewGameSquare("xand2");
          createNewGameSquare("xand3");
          createNewGameSquare("xand4");
          createNewGameSquare("xand5");
          createNewGameSquare("xand6");
          createNewGameSquare("xand7");
          createNewGameSquare("xand8");
          createNewGameSquare("xand9");
    const newGameButton = document.createElement("button");
          newGameButton.textContent = "Start New Game";
          newGameButton.className = "xAnd0NewGame navigationBtn";
          newGameButton.onclick = startNewGame;
          
          
    
function createNewGameSquare (id) {
    const element = document.createElement("div");
          element.className = "xAnd0Square";
          element.onclick = gridClick;
    const sqare = document.createElement("p");
          sqare.id = id;
          sqare.className = "margin-auto xAnd0Select";
    element.appendChild(sqare);
    gameContainer.appendChild(element);
};
function gridClick (e) {
    console.log(e.target.firstChild);
    const div = e.target;
    const text = div.firstChild;
    if(text.textContent == "" && gameTurn == "Player 1") {
        text.textContent = "X";
        text.className = "text-red margin-auto xAnd0Select";
        gameText.textContent = "Player 2 turn! Pick a empty square";
        endGameCheck();
        gameTurn = "Player 2";
    } else if(text.textContent == "" && gameTurn == "Player 2") {
        text.textContent = "0";
        text.className = "text-blue margin-auto xAnd0Select";
        gameText.textContent = "Player 1 turn! Pick a empty square";
        endGameCheck();
        gameTurn = "Player 1";
    }
};
function startNewGame () {
    for (let i=0 ; i <9 ; i++) {
        gameContainer.children[i].style.backgroundColor = "beige";
        gameContainer.children[i].children[0].className = "";
        gameContainer.children[i].children[0].textContent = "";
    }
    gameText.textContent = `${gameTurn} turn! Pick a empty cell`;
}
function endGameCheck () {
    const grid1 = document.getElementById("xand1");
    const grid2 = document.getElementById("xand2");
    const grid3 = document.getElementById("xand3");
    const grid4 = document.getElementById("xand4");
    const grid5 = document.getElementById("xand5");
    const grid6 = document.getElementById("xand6");
    const grid7 = document.getElementById("xand7");
    const grid8 = document.getElementById("xand8");
    const grid9 = document.getElementById("xand9");
    function stopGame () {
        for (i=0 ; i<9 ; i++) {
            if (gameContainer.children[i].children[0].textContent == ""){
                gameContainer.children[i].children[0].textContent = "-";
            }
        }
    }
    function addScore () {
        if (gameTurn == "Player 1") {
            firstPlayerScore.textContent = +firstPlayerScore.textContent +1;
        } else {
            secoundPlayerScore.textContent = +secoundPlayerScore.textContent +1;
        }
    }
    if(grid1.textContent != "" && grid1.textContent == grid2.textContent && grid1.textContent == grid3.textContent) {
        grid1.parentNode.style.backgroundColor = "green";
        grid2.parentNode.style.backgroundColor = "green";
        grid3.parentNode.style.backgroundColor = "green";
        gameText.textContent = `${gameTurn} Win this game !`;
        stopGame();
        addScore();
    } else if(grid4.textContent != "" && grid4.textContent == grid5.textContent && grid4.textContent == grid6.textContent) {
        console.log(grid4);
        console.log(grid4.parentNode);
        grid4.parentNode.style.backgroundColor = "green";
        grid5.parentNode.style.backgroundColor = "green";
        grid6.parentNode.style.backgroundColor = "green";
        gameText.textContent = `${gameTurn} Win this game !`;
        stopGame();
        addScore();
    } else if(grid7.textContent != "" && grid7.textContent == grid8.textContent && grid7.textContent == grid9.textContent) {
        grid7.parentNode.style.backgroundColor = "green";
        grid8.parentNode.style.backgroundColor = "green";
        grid9.parentNode.style.backgroundColor = "green";
        gameText.textContent = `${gameTurn} Win this game !`;
        stopGame();
        addScore();
    } else if(grid1.textContent != "" && grid1.textContent == grid4.textContent && grid1.textContent == grid7.textContent) {
        grid1.parentNode.style.backgroundColor = "green";
        grid4.parentNode.style.backgroundColor = "green";
        grid7.parentNode.style.backgroundColor = "green";
        gameText.textContent = `${gameTurn} Win this game !`;
        stopGame();
        addScore();
    } else if(grid2.textContent != "" && grid2.textContent == grid5.textContent && grid2.textContent == grid8.textContent) {
        grid2.parentNode.style.backgroundColor = "green";
        grid5.parentNode.style.backgroundColor = "green";
        grid8.parentNode.style.backgroundColor = "green";
        gameText.textContent = `${gameTurn} Win this game !`;
        stopGame();
        addScore();
    } else if(grid3.textContent != "" && grid3.textContent == grid6.textContent && grid3.textContent == grid9.textContent) {
        grid3.parentNode.style.backgroundColor = "green";
        grid6.parentNode.style.backgroundColor = "green";
        grid9.parentNode.style.backgroundColor = "green";
        gameText.textContent = `${gameTurn} Win this game !`;
        stopGame();
        addScore();
    } else if(grid1.textContent != "" && grid1.textContent == grid5.textContent && grid1.textContent == grid9.textContent) {
        grid1.parentNode.style.backgroundColor = "green";
        grid5.parentNode.style.backgroundColor = "green";
        grid9.parentNode.style.backgroundColor = "green";
        gameText.textContent = `${gameTurn} Win this game !`;
        stopGame();
        addScore();
    } else if(grid3.textContent != "" && grid3.textContent == grid5.textContent && grid3.textContent == grid7.textContent) {
        grid3.parentNode.style.backgroundColor = "green";
        grid5.parentNode.style.backgroundColor = "green";
        grid7.parentNode.style.backgroundColor = "green";
        gameText.textContent = `${gameTurn} Win this game !`;
        stopGame();
        addScore();
    } else if (grid1.textContent != "" && grid2.textContent != "" && grid3.textContent != "" && grid4.textContent != "" && grid5.textContent != "" && grid6.textContent != "" && grid7.textContent != "" && grid8.textContent != "" && grid9.textContent != "") {
        gameText.textContent = "It`s a drow";
        drowScore.textContent = +drowScore.textContent +1;
    }
}
root.appendChild(scoreContainer);
root.appendChild(textContainer);
root.appendChild(gameContainer);
root.appendChild(newGameButton);
}