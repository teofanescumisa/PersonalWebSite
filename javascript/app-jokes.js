/*
Fetch data from API to get 10x Random Jokes
https://sv443.net/jokeapi/v2/

Made By Teofanescu Misha
*/

function appRandomJokes () {
    newProject(); 
    
    const divBody = document.createElement("div");
          divBody.className = "jokesBody";
    const selectContainer = document.createElement("section");
          selectContainer.className = "selectContainer";
    const select = document.createElement("select");
          select.oninput = categoryOfJoke;
    const option1 = document.createElement("option");
          option1.textContent = "Pick Jokes Category";
    const option2 = document.createElement("option");
          option2.textContent = "Any Jokes";
    const option3 = document.createElement("option");
          option3.textContent = "Programming Jokes";
    const option4 = document.createElement("option");
          option4.textContent = "Misc Jokes";
    const option5 = document.createElement("option");
          option5.textContent = "Dark Jokes";
    const option6 = document.createElement("option");
          option6.textContent = "Pun Jokes";
    const option7 = document.createElement("option");
          option7.textContent = "Spooky Jokes";
    const option8 = document.createElement("option");
          option8.textContent = "Christmas Jokes";
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);
    select.appendChild(option8);
    selectContainer.appendChild(select);
    divBody.appendChild(selectContainer);
    const jokesListContainer = document.createElement("section");
          jokesListContainer.className = "flex-column";

function createNewJoke (data) {
    const div =document.createElement("div") ;
          div.className = "flex-rows jokeContainer";
    const index = document.createElement("p");
          index.className = "jokeNumber";
          index.textContent = (jokesListContainer.children.length +1);
    div.appendChild(index);
    const joke = document.createElement("section");
          joke.className = "Joke-Container";
    const question = document.createElement("p");
          question.textContent = "Question : ";
    const questionApiAnswer = document.createElement("span");
          questionApiAnswer.textContent = data.setup;
    question.appendChild(questionApiAnswer);
    const answer = document.createElement("p");
          answer.textContent = "Answer : ";
    const answerApiAnswer = document.createElement("span");
          answerApiAnswer.className ="joke-answer";
          answerApiAnswer.textContent = data.delivery;
    question.appendChild(questionApiAnswer);
    answer.appendChild(answerApiAnswer);
    joke.appendChild(question);
    joke.appendChild(answer);
    div.appendChild(joke);
    jokesListContainer.appendChild(div);
}  
function categoryOfJoke () {
    if (select.value == "Any Jokes") {
        fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10")
        .then(data => data.json())
        .then((data) => {
            jokesListContainer.textContent = "";
            data.jokes.forEach(item => createNewJoke(item));
        })
    }
    else if (select.value == "Programming Jokes") {
        fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10")
        .then(data => data.json())
        .then((data) => {
            jokesListContainer.textContent = "";
            data.jokes.forEach(item => createNewJoke(item));
        })
    }
    else if (select.value == "Misc Jokes") {
        fetch("https://v2.jokeapi.dev/joke/Miscellaneous?type=twopart&amount=10")
        .then(data => data.json())
        .then((data) => {
            jokesListContainer.textContent = "";
            data.jokes.forEach(item => createNewJoke(item));
        })
    }
    else if (select.value == "Dark Jokes") {
        fetch("https://v2.jokeapi.dev/joke/Dark?type=twopart&amount=10")
        .then(data => data.json())
        .then((data) => {
            jokesListContainer.textContent = "";
            data.jokes.forEach(item => createNewJoke(item));
        })
    }
    else if (select.value == "Pun Jokes") {
        fetch("https://v2.jokeapi.dev/joke/Pun?type=twopart&amount=10")
        .then(data => data.json())
        .then((data) => {
            jokesListContainer.textContent = "";
            data.jokes.forEach(item => createNewJoke(item));
        })
    }
    else if (select.value == "Spooky Jokes") {
        fetch("https://v2.jokeapi.dev/joke/Spooky?type=twopart&amount=10")
        .then(data => data.json())
        .then((data) => {
            jokesListContainer.textContent = "";
            data.jokes.forEach(item => createNewJoke(item));
        })
    }
    else if (select.value == "Christmas Jokes") {
        fetch("https://v2.jokeapi.dev/joke/Christmas?type=twopart&amount=10")
        .then(data => data.json())
        .then((data) => {
            jokesListContainer.textContent = "";
            data.jokes.forEach(item => createNewJoke(item));
        })
    }
}
root.appendChild(divBody);
root.appendChild(jokesListContainer);
};
appRandomJokes();