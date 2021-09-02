/*
Random Color Generator
Made by Teofanescu Misa
*/

function appRandomColor () {
    newProject();
    const hex =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
function randomColor () {
    const randomNumber = () => {return Math.floor(Math.random() * hex.length)};
    return `#${hex[randomNumber()]}${hex[randomNumber()]}${hex[randomNumber()]}${hex[randomNumber()]}${hex[randomNumber()]}${hex[randomNumber()]}`
}
    const appInfo = document.createElement("section");
          appInfo.className = "flex-rows content-space-around";
    const ul = document.createElement("ul");
          ul.textContent = "If you dont know what color to use on your projects :";
    const li1 = document.createElement("li");
          li1.textContent = "Click on a circle to change the color";
    ul.appendChild(li1);
    const li2 = document.createElement("li");
          li2.textContent = "Under each circle there is a HEX code of the color to use in your project";
    ul.appendChild(li2);
    appInfo.appendChild(ul);
root.appendChild(appInfo);

    const section = document.createElement("section");
        section.className = "flex-column";
    const text1 = document.createElement("p");
        text1.className = "flex-rows content-space-between text-bold color-text";
        text1.textContent = "Hex Code : ";
    const hexCode = document.createElement("span");
    text1.appendChild(hexCode);
    section.appendChild(text1);
    const text2 = document.createElement("p");
        text2.className = "flex-rows content-space-between text-bold color-text";
        text2.textContent = "RGB Code : ";
    const rgbCode = document.createElement("span");
    text2.appendChild(rgbCode);
    section.appendChild(text2);
root.appendChild(section);
    const circle = document.createElement("div");
          circle.className = "randomColorDiv margin-auto";
          circle.onclick = changeMe;
changeMe();
root.appendChild(circle);

function changeMe () {
    const color = randomColor();
    circle.style.backgroundColor = color;
    hexCode.textContent = color;
    rgbCode.textContent = circle.style.backgroundColor;
}
};