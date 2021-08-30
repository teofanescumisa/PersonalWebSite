const navBar = document.getElementById("navbar");
function clearNavigationBar () {
    navBar.textContent = "";
}
const root = document.getElementById("root");
function newProject () {
    clearNavigationBar();
    homeButton();
    root.textContent = "";
}