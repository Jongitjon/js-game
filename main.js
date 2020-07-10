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
    confabulatoin: 'converse',
    behest: 'command',
    polemic: 'debate',
    scuttlebutt: 'gossip'
}

let words = ['cabalistic', 'confabulatoin', 'behest', 'polemic', 'scuttlebutt'];

btn.onclick = function() {
    //removes elements to begin game
    synonyms.remove();
    btnAndText[0].remove();
    btnAndText[1].remove();
    
    //gets random word from words array:
    let rand = Math.floor(Math.random() * (words.length));
    word = words[rand];

    //creates text for question and creates radio button and labels:
    let question = document.createElement("p");
    let answer1 = document.createElement("label");
    let answer2 = document.createElement("label");
    let answer3 = document.createElement("label");
    let answer4 = document.createElement("label");
    let answer5 = document.createElement("label");
    let radio1 = document.createElement("input");
    radio1.type = 'radio';
    radio1.id = 'radio1';
    radio1.value = 'mysterious';
    let radio2 = document.createElement("input");
    radio2.type = 'radio';
    radio2.id = 'radio2';
    radio2.value = 'converse';
    let radio3 = document.createElement("input");
    radio3.type = 'radio';
    radio3.id = 'radio3';
    radio3.value = 'command';
    let radio4 = document.createElement("input");
    radio4.type = 'radio';
    radio4.id = 'radio4';
    radio4.value = 'debate';
    let radio5 = document.createElement("input");
    radio5.type = 'radio';
    radio5.id = 'radio5';
    radio5.value = 'gossip';
    let lineBreak1 = document.createElement("br");
    let lineBreak2 = document.createElement("br");
    let lineBreak3 = document.createElement("br");
    let lineBreak4 = document.createElement("br");

    //css for elements to be uploaded:
    question.style.fontSize = '100px';
    question.style.fontFamily = 'Modak, cursive';
    answer1.style.color = 'red';

 

    //change texts and uploads to DOM
    question.innerHTML = `What is a synonym of ${word}?`;
    answer1.innerHTML = "mysterious"
    answer2.innerHTML = "converse"
    answer3.innerHTML = "command"
    answer4.innerHTML = "debate"
    answer5.innerHTML = "gossip"
    document.body.appendChild(question);
    document.body.appendChild(answer1);
    document.body.appendChild(radio1)
    document.body.appendChild(lineBreak1);
    document.body.appendChild(answer2);
    document.body.appendChild(radio2)
    document.body.appendChild(lineBreak2);
    document.body.appendChild(answer3);
    document.body.appendChild(radio3)
    document.body.appendChild(lineBreak3);
    document.body.appendChild(answer4);
    document.body.appendChild(radio4)
    document.body.appendChild(lineBreak4);
    document.body.appendChild(answer5);
    document.body.appendChild(radio5);

}
function startFresh() {
    
}