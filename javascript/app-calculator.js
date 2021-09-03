/*
Calculator with 22 number maximum on display
Made By Teofanescu Misha
*/
function appCalculator () {
    newProject();
    let memoryDisplay ="";
    let displayText ="";
    let hasDot = false;
    let memoryNumber1 ="";

    const body = document.createElement("div");
          body.className = "calculatorBody";
    const display = document.createElement("section");
          display.className = "calculatorDisplay";
    const historyScreen = document.createElement("p");
          historyScreen.className = "calculatorScreen";
    display.appendChild(historyScreen);
    const screen = document.createElement("p");
          screen.textContent = "0";
          screen.className = "calculatorScreen";
    display.appendChild(screen);
body.appendChild(display);
    const buttonContainer1 = document.createElement("section");
          buttonContainer1.className = "buttons3";
    const btn_C = document.createElement("button");
          btn_C.className = "pokerGameButton font-22px";
          btn_C.textContent = "C";
    buttonContainer1.appendChild(btn_C);
    const btn_divide = document.createElement("button");
          btn_divide.className ="pokerGameButton font-22px";
          btn_divide.textContent = "/";
    buttonContainer1.appendChild(btn_divide);
    const btn_del =document.createElement("button");
          btn_del.className = "pokerGameButton font-22px";
          btn_del.textContent = "Backspace";
    buttonContainer1.appendChild(btn_del);
body.appendChild(buttonContainer1);
    const buttonContainer2 = document.createElement("section");
          buttonContainer2.className = "buttons4";
    const btn_7 = document.createElement("button");
          btn_7.className = "pokerGameButton font-22px";
          btn_7.textContent = "7";
    buttonContainer2.appendChild(btn_7);
    const btn_8 = document.createElement("button");
          btn_8.className = "pokerGameButton font-22px";
          btn_8.textContent = "8";
    buttonContainer2.appendChild(btn_8);
    const btn_9 = document.createElement("button");
          btn_9.className = "pokerGameButton font-22px";
          btn_9.textContent = "9";
    buttonContainer2.appendChild(btn_9);
    const btn_X = document.createElement("button");
          btn_X.className = "pokerGameButton font-22px";
          btn_X.textContent = "X";
    buttonContainer2.appendChild(btn_X);
body.appendChild(buttonContainer2);
    const buttonContainer3 = document.createElement("section");
          buttonContainer3.className = "buttons4";
    const btn_4 = document.createElement("button");
          btn_4.className = "pokerGameButton font-22px";
          btn_4.textContent = "4";
    buttonContainer3.appendChild(btn_4);
    const btn_5 = document.createElement("button");
          btn_5.className = "pokerGameButton font-22px";
          btn_5.textContent = "5";
    buttonContainer3.appendChild(btn_5);
    const btn_6 = document.createElement("button");
          btn_6.className = "pokerGameButton font-22px";
          btn_6.textContent = "6";
    buttonContainer3.appendChild(btn_6);
    const btn_minus = document.createElement("button");
          btn_minus.className = "pokerGameButton font-22px";
          btn_minus.textContent = "-";
    buttonContainer3.appendChild(btn_minus);
body.appendChild(buttonContainer3);
    const buttonContainer4 = document.createElement("section");
          buttonContainer4.className = "buttons4";
    const btn_1 = document.createElement("button");
          btn_1.className = "pokerGameButton font-22px";
          btn_1.textContent = "1";
    buttonContainer4.appendChild(btn_1);
    const btn_2 = document.createElement("button");
          btn_2.className = "pokerGameButton font-22px";
          btn_2.textContent = "2";
    buttonContainer4.appendChild(btn_2);
    const btn_3 = document.createElement("button");
          btn_3.className = "pokerGameButton font-22px";
          btn_3.textContent = "3";
    buttonContainer4.appendChild(btn_3);
    const btn_plus = document.createElement("button");
          btn_plus.className = "pokerGameButton font-22px";
          btn_plus.textContent = "+";
    buttonContainer4.appendChild(btn_plus);
body.appendChild(buttonContainer4);
    const buttonContainer5 = document.createElement("section");
          buttonContainer5.className = "buttons3";
    const btn_dot = document.createElement("button");
          btn_dot.className = "pokerGameButton font-22px";
          btn_dot.textContent = ".";
    buttonContainer5.appendChild(btn_dot);
    const btn_0 = document.createElement("button");
          btn_0.className = "pokerGameButton font-22px";
          btn_0.textContent = "0";
    buttonContainer5.appendChild(btn_0);
    const btn_equal = document.createElement("button");
          btn_equal.className = "pokerGameButton font-22px";
          btn_equal.textContent = "=";
    buttonContainer5.appendChild(btn_equal);
body.appendChild(buttonContainer5);

/*
    Add action on calculator buttons !
*/
function refreshDisplay () {
    historyScreen.textContent = memoryDisplay;
    screen.textContent = displayText;
};
btn_0.onclick = clickOnZero;
    function clickOnZero () {
        if (displayText != "" && displayText.length < 23) {
            displayText += btn_0.textContent;
            refreshDisplay();
        }
    };
btn_1.onclick = clickOnOne;
    function clickOnOne () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_1.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_1.textContent;
            refreshDisplay();
        }
    };
btn_2.onclick = clickOnTwo;
    function clickOnTwo () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_2.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_2.textContent;
            refreshDisplay();
        }
    };
btn_3.onclick = clickOnThree;
    function clickOnThree () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_3.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_3.textContent;
            refreshDisplay();
        }
    };
btn_4.onclick = clickOnFour;
    function clickOnFour () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_4.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_4.textContent;
            refreshDisplay();
        }
    };
btn_5.onclick = clickOnFive;
    function clickOnFive () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_5.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_5.textContent;
            refreshDisplay();
        }
    };
btn_6.onclick = clickOnSix;
    function clickOnSix () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_6.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_6.textContent;
            refreshDisplay();
        }
    };
btn_7.onclick = clickOnSeven;
    function clickOnSeven () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_7.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_7.textContent;
            refreshDisplay();
        }
    };
btn_8.onclick = clickOnEight;
    function clickOnEight () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_8.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_8.textContent;
            refreshDisplay();
        }
    };
btn_9.onclick = clickOnNine;
    function clickOnNine () {
        if (displayText.length < 23 && memoryNumber1 == "") {
            displayText += btn_9.textContent;
            refreshDisplay();
        } else if (displayText.length < 23 && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")){
            displayText += btn_9.textContent;
            refreshDisplay();
        }
    };
btn_dot.onclick = clickOnDot;
    function clickOnDot () {
        if(displayText.length < 23 && displayText == "" && memoryNumber1 == "") {
            displayText = "0.";
            hasDot = true;
            refreshDisplay();  
        } else if (displayText.length < 23 && !hasDot && memoryNumber1 == "") {
            displayText += btn_dot.textContent;
            hasDot = true;
            refreshDisplay();
        } else if (displayText.length < 23 && displayText == "" && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")) {
            displayText = "0.";
            hasDot = true;
            refreshDisplay();
        } else if (displayText.length < 23 && displayText != "" && memoryNumber1 != "" && (memoryDisplay[memoryDisplay.length-1] == "/" || memoryDisplay[memoryDisplay.length-1] == "x" || memoryDisplay[memoryDisplay.length-1] == "-" || memoryDisplay[memoryDisplay.length-1] == "+")) {
            displayText += btn_dot.textContent;
            hasDot = true;
            refreshDisplay();
        }
    };
btn_del.onclick = clickOnBackSpace;
    function clickOnBackSpace () {
        if (displayText.length > 0 && displayText != "0." && displayText[displayText.length-1] != ".") {
            displayText = displayText.slice(0, displayText.length-1);
            refreshDisplay();
        } else if (displayText == "0.") {
            displayText = "";
            hasDot = false;
            refreshDisplay();
        }else if (displayText[displayText.length-1] == ".") {
            displayText = displayText.slice(0, displayText.length-1);
            hasDot = false;
            refreshDisplay();
        }
    };
btn_C.onclick = clickOnC;
    function clickOnC () {
        memoryDisplay = "";
        displayText = "";
        memoryNumber1 = "";
        hasDot = false;
        refreshDisplay();
        screen.textContent = "0";
    };
btn_minus.onclick = clickOnMinus;
    function clickOnMinus () {
        if (displayText.length == 0 && memoryDisplay == "") {
            displayText = "-";
            refreshDisplay();
        } else if (displayText.length > 0 && memoryDisplay == "" && displayText != "-"){
            memoryNumber1 = +displayText;
            memoryDisplay = displayText + "-";
            displayText = "";
            refreshDisplay();
            screen.textContent = "0";
        } else if (displayText.length == 0 && memoryDisplay != "") {
            memoryDisplay = memoryDisplay + "-";
            refreshDisplay();
            screen.textContent = "0";
        }
    };
btn_plus.onclick = clickOnPlus;
    function clickOnPlus () {
        if (displayText.length == 0 && memoryDisplay == "") {
            displayText = "+";
            refreshDisplay();
        } else if (displayText.length > 0 && memoryDisplay == "" && displayText != "-"){
            memoryNumber1 = +displayText;
            memoryDisplay = displayText + "+";
            displayText = "";
            refreshDisplay();
            screen.textContent = "0";
        } else if (displayText.length == 0 && memoryDisplay != "") {
            memoryDisplay = memoryDisplay + "+";
            refreshDisplay();
            screen.textContent = "0";
        }
    };
btn_divide.onclick = clickOnDivide;
    function clickOnDivide () {
        if (displayText.length == 0 && memoryDisplay == "") {
            displayText = "/";
            refreshDisplay();
        } else if (displayText.length > 0 && memoryDisplay == "" && displayText != "-"){
            memoryNumber1 = +displayText;
            memoryDisplay = displayText + "/";
            displayText = "";
            refreshDisplay();
            screen.textContent = "0";
        } else if (displayText.length == 0 && memoryDisplay != "") {
            memoryDisplay = memoryDisplay + "/";
            refreshDisplay();
            screen.textContent = "0";
        } 
    };
btn_X.onclick = clickOnX;
    function clickOnX () {
        if (displayText.length == 0 && memoryDisplay == "") {
            displayText = "x";
            refreshDisplay();
        } else if (displayText.length > 0 && memoryDisplay == "" && displayText != "-"){
            memoryNumber1 = +displayText;
            memoryDisplay = displayText + "x";
            displayText = "";
            refreshDisplay();
            screen.textContent = "0";
        } else if (displayText.length == 0 && memoryDisplay != "") {
            memoryDisplay = memoryDisplay + "x";
            refreshDisplay();
            screen.textContent = "0";
        }
    };
btn_equal.onclick = clickOnEqual;
    function clickOnEqual () {
    if(memoryDisplay.length > 0) {
        if(memoryDisplay[memoryDisplay.length-1] == "+"){
            memoryNumber1 = memoryNumber1 + (+displayText);
            memoryDisplay = memoryNumber1;
            displayText = "";
            refreshDisplay();
            screen.textContent = "0";
        }
        if(memoryDisplay[memoryDisplay.length-1] == "-"){
            memoryNumber1 = memoryNumber1 - (+displayText);
            memoryDisplay = memoryNumber1;
            displayText = "";
            refreshDisplay();
            screen.textContent = "0";
        }
        if(memoryDisplay[memoryDisplay.length-1] == "x"){
            memoryNumber1 = memoryNumber1 * (+displayText);
            memoryDisplay = memoryNumber1;
            displayText = "";
            refreshDisplay();
            screen.textContent = "0";
        }
        if(memoryDisplay[memoryDisplay.length-1] == "/"){
            memoryNumber1 = memoryNumber1 / (+displayText);
            memoryDisplay = memoryNumber1;
            displayText = "";
            refreshDisplay();
            screen.textContent = "0";
        }



    }
  };

root.appendChild(body);
}