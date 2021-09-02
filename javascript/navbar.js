
// Multiple Use Function for Navigation Bar

function createNewNavigationButton (textContent,className,addEventListener) {
    const button = document.createElement("button");
          button.textContent = textContent;
          button.className = className;
          button.onclick = addEventListener;
    navBar.appendChild(button);
}
// MENU Button
function clickMenuButton () {
    clearNavigationBar();
    returnButton(homeButton);
    aboutMishaButton(); // NOT WORKING
    projectsButton();
};
// ABOUT MISHA
function clickAboutMisha () {
    //Do Something
}
// PROJECTS Button
function clickProjectsButton () {
    clearNavigationBar();
    returnButton(clickMenuButton);
    createNewNavigationButton("Apps","navigationBtn",clickAppsButton);
    createNewNavigationButton("Games","navigationBtn",clickGamesButton);
    
}
// GAMES Button
function clickGamesButton() {
    clearNavigationBar();
    returnButton(clickProjectsButton);
    createNewNavigationButton("X and 0","navigationBtn",xAnd0Game);
    createNewNavigationButton("Highter And Lower","navigationBtn",highterAndLowerGame);
    createNewNavigationButton("American Poker 90`","navigationBtn",americanPoker90);
}
function clickAppsButton() {
    clearNavigationBar();
    returnButton(clickProjectsButton);
    createNewNavigationButton("Calculator","navigationBtn",appCalculator);
}





// OnClick Function
function homeButton () {
    clearNavigationBar();
    createNewNavigationButton("Menu","navigationBtn",clickMenuButton);
};
function returnButton (returnToFunction) {
    const button = document.createElement("button");
          button.className = "navigationBtn";
          button.onclick = returnToFunction;
    const img = document.createElement("img");
          img.className = "returnButton";
          img.alt = "Return Button";
          img.title = "Go back";
          img.src = "./img/buttons/return-icon.jpg";
    button.appendChild(img);
    navBar.appendChild(button);
};
function aboutMishaButton () {
    createNewNavigationButton("About Misha","navigationBtn",);
}
function projectsButton () {
    createNewNavigationButton("Projects","navigationBtn",clickProjectsButton);
}
function gamesButton () {

}










