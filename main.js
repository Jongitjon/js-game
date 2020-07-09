/*
By Jonathan Norris 2020

Synonyms game: Match correct synonym of four words displayed. Get five correct in 
a row to win
*/
const body = document.querySelector("body");
const btn = document.querySelector("div");
const synonyms = document.querySelector("h1");
const btnAndText = document.querySelectorAll("div");

let dictionary = {
    cabalistic: 'mysterious',
    didapper: 'a type of small bird'
}

let words = ['cabalistic', 'didapper'];

btn.onclick = function() {
    //removes elements to begin game
    synonyms.remove();
    btnAndText[0].remove();
    btnAndText[1].remove();
    body.style.backgroundColor = "red";

    //gets random word from words array:
    let rand = Math.floor(Math.random() * (words.length));
    word = words[rand];

    //creates text for question and radio buttons:
    let question = document.createElement("p");
    let answer1 = document.createElement("ol");
    let answer2 = document.createElement("ol");
    let answer3 = document.createElement("ol");
    let answer4 = document.createElement("ol");

    question.innerHTML = `What is a synonym of ${word}`;
    answer1.innerHTML = "mysterious"
    document.body.appendChild(question);
    document.body.appendChild(answer1);
    document.body.appendChild(answer2);


}
function startFresh() {
    
}