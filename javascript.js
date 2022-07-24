
const askQuestion = () => {
    prompt('What is your question?');
}

const eightBall = () => {
    let magicEightBallNumber = Math.floor(Math.random() * 8);
    if (magicEightBallNumber === 0) {
        document.getElementById('result').innerHTML = 'Yes';
    }
    if (magicEightBallNumber === 1) {
        document.getElementById('result').innerHTML = 'No';
    }
    if (magicEightBallNumber === 2) {
        document.getElementById('result').innerHTML = 'Maybe';
    }
    if (magicEightBallNumber === 3) {
        document.getElementById('result').innerHTML = 'Indefinetely';
    }
    if (magicEightBallNumber === 4) {
        document.getElementById('result').innerHTML = 'Indecisive';
    }
    if (magicEightBallNumber === 5) {
        document.getElementById('result').innerHTML = 'Answer Unknown';
    }
    if (magicEightBallNumber === 6) {
        document.getElementById('result').innerHTML = 'Impossible';
    }
    if (magicEightBallNumber === 7) {
        document.getElementById('result').innerHTML = 'We Will See';
    }
}

const resetQuestion = () => {
    document.getElementById('result').innerHTML = 'Magic 8 Ball Result Here';
}

let rock = false;
let paper = false;
let scissors = false;

const rockClick = () => {
    rock = true;
}

const paperClick = () => {
    paper = true;
}

const scissorsClick = () => {
    scissors = true;
}

const tie = 'Tie';
const win = 'You Win!';
const lose = 'You Lose!';
let randomNumber;
let aiResponse;
const rps = () => {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        aiResponse = 'Rock';
    }
    if (randomNumber === 1) {
        aiResponse = 'Paper';
    }
    if (randomNumber === 2) {
        aiResponse = 'Scissors';
    }
    document.getElementById('aiResult').innerHTML = `Ai Choice - ${aiResponse}`;

    if (rock == true && aiResponse == 'Rock') {
        document.getElementById('gameResult').innerHTML = tie;
    }
    if (rock == true && aiResponse == 'Paper') {
        document.getElementById('gameResult').innerHTML = lose;
    }
    if (rock == true && aiResponse == 'Scissors') {
        document.getElementById('gameResult').innerHTML = win;
    }

    if (paper == true && aiResponse == 'Paper') {
        document.getElementById('gameResult').innerHTML = tie;
    }
    if (paper == true && aiResponse == 'Rock') {
        document.getElementById('gameResult').innerHTML = win;
    }
    if (paper == true && aiResponse == 'Scissors') {
        document.getElementById('gameResult').innerHTML = lose;
    }
    if (scissors == true && aiResponse == 'Scissors') {
        document.getElementById('gameResult').innerHTML = tie;
    }
    if (scissors == true && aiResponse == 'Rock') {
        document.getElementById('gameResult').innerHTML = lose;
    }
    if (scissors == true && aiResponse == 'Paper') {
        document.getElementById('gameResult').innerHTML = win;
    }
}

const rpsReset = () => {
    rock = false;
    paper = false;
    scissors = false;
    document.getElementById('aiResult').innerHTML = 'Ai Response';
    document.getElementById('gameResult').innerHTML = 'Game Result';
}