/*
By Jonathan Norris 2020

Synonyms game: Match correct synonym of four words displayed. Get five correct in 
a row to win
*/
const body = document.querySelector("body");
const btn = document.querySelector("div");
const synonyms = document.querySelector("h1");
const btnAndText = document.querySelectorAll("div");

//object with words and their synonyms. accessed later for game
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
    let divAll = document.createElement("div");
    let count = document.createElement("p");
    let counter = 0;

    //css for elements to be uploaded:
    question.style.fontSize = '100px';
    question.style.fontFamily = 'Modak, cursive';
    answer1.style.color = 'red';
    answer2.style.color = 'green';
    answer3.style.color = 'blue';
    answer4.style.color = 'orange';
    answer5.style.color = 'purple';


    //change texts and uploads to DOM
    question.innerHTML = `What is a synonym of ${word}?`;
    answer1.innerHTML = "mysterious"
    answer2.innerHTML = "converse"
    answer3.innerHTML = "command"
    answer4.innerHTML = "debate"
    answer5.innerHTML = "gossip"
    strCount = counter.toString();
    count.innerHTML = `Score: ${strCount}/5`;
    document.body.appendChild(divAll);
    divAll.appendChild(question);
    divAll.appendChild(answer1);
    divAll.appendChild(radio1)
    divAll.appendChild(lineBreak1);
    divAll.appendChild(answer2);
    divAll.appendChild(radio2)
    divAll.appendChild(lineBreak2);
    divAll.appendChild(answer3);
    divAll.appendChild(radio3)
    divAll.appendChild(lineBreak3);
    divAll.appendChild(answer4);
    divAll.appendChild(radio4)
    divAll.appendChild(lineBreak4);
    divAll.appendChild(answer5);
    divAll.appendChild(radio5);
    divAll.appendChild(count);

    /*conditionals to tell which radio button checked. If correct, continue, if 
    wrong, gameover: */
    
    radio1.onclick = function () {
        if(dictionary[word] === 'mysterious') {
            addScore();
            youWin();
            nextQuestion();
        } else {
            alert('Incorrect!')
            gameOver();
        }
    }

    radio2.onclick = function () {
        if(dictionary[word] === 'converse') {
            addScore();
            youWin();
            nextQuestion();
        } else {
            alert('Incorrect!')
            gameOver();
        }
    }

    radio3.onclick = function () {
        if(dictionary[word] === 'command') {
            addScore();
            youWin();
            nextQuestion();
        } else {
            alert('Incorrect!')
            gameOver();
        }
    }

    radio4.onclick = function () {
        if(dictionary[word] === 'debate') {
            addScore();
            youWin();
            nextQuestion();
        } else {
            alert('Incorrect!')
            gameOver();
        }
    }

    radio5.onclick = function () {
        if(dictionary[word] === 'gossip') {
            addScore();
            youWin();
            nextQuestion();
        } else {
            alert('Incorrect!')
            gameOver();
        }
    }

    

    //removes all elements, changes background to red, uploads 'game over' text and sad face
    function gameOver() {
        divAll.remove();
        document.body.style.backgroundColor = 'red';
        let end = document.createElement('h2');
        end.innerHTML = 'GAME OVER';
        document.body.appendChild(end).style.textAlign = 'center';
        let sad = document.createElement('img');
        let face = document.body.appendChild(sad);
        face.style.marginLeft = 'auto';
        face.style.marginRight = 'auto';
        face.style.display = 'block';
        sad.src = "https://static.thenounproject.com/png/5724-200.png"
    }
 
    function addScore() {
        counter += 1;
        strCount = counter.toString();
        count.innerHTML = `Score: ${strCount}/5`;
    }
    //changes word in 'What is a synonym of ${word}?'
    function nextQuestion() {
        //deletes used word from words array and generates new random word from array
        let del = words.indexOf(word);
        words.splice(del,1);
        rand = Math.floor(Math.random() * (words.length));
        //replaces current word in html
        word = words[rand];
        question.innerHTML = `What is a synonym of ${word}?`;
    }

    //removes all elements, changes background to green, uploads 'you win!' text and smiley face
    function youWin() {
        if(counter === 5) {
            divAll.remove();
            document.body.style.backgroundColor = 'green';
            let win = document.createElement('h2');
            win.innerHTML = 'YOU WIN!';
            document.body.appendChild(win).style.textAlign = 'center';
            let happy = document.createElement('img');
            let hFace = document.body.appendChild(happy);
            hFace.style.marginLeft = 'auto';
            hFace.style.marginRight = 'auto';
            hFace.style.display = 'block';
            happy.src = "https://www.nicepng.com/png/detail/152-1529091_happy-smile-png-smiley-face-icon-png.png"
        }
    }
}


