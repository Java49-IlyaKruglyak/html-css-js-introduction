const worsd = ['pappy', 'apple', 'photo', 'java', 'chair'];
const presentations = ['close relative', 'fruit', 'picture', 'programming language', 'furniture']

const words = [
    ['close relative', 'pappy'],
    ['fruit', 'apple'],
    ['picture','photo'],
    ['programming language', 'java'],
    ['furniture', 'chair']];

let word;
let index = 0;
let prevInd = -1;
let searchWordArr = [];
const sectionElement = document.querySelector(".word-guess");
let searchWordArrLen=0;
sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");
const trialNumberElement = document.querySelector(".trial-number");
const wordTrialsElement = document.querySelector(".word-trial");
const gameOverElement = document.querySelector(".game-over-message");
const invitationElement = document.querySelector(".guess-invitation");
//const playAgainElement = document.getElementById("play-again");

// let flGameOver = false;
// let trials = 0;

function getDivsElements() {
    index = getIndex();
    console.log('word=', words[index][1]);
    word = words[index][1];
    searchWordArr = Array.from(word);
    let res = searchWordArr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}

function getIndex() {
    index = Math.floor(Math.random() * words.length); 
    while(index == prevInd) {
        index = Math.floor(Math.random() * words.length);  
    }
    prevInd = index;
    return index;
}

// function showTrialMessage(trials, word) {    
//     trialNumberElement.innerHTML = `You have done ${trials} guess trials`;  
//     wordTrialsElement.innerHTML = `Your word is ${word}`;
// }

// function startGame() {
//     if(flGameOver) {
//         sectionElement.innerHTML = getDivsElements();
//         flGameOver = false;
//     }
//     trials = 0;
//     searchWordArrLen = 0;
//     flGameOver = false;
//     gameOverElement.innerHTML =  "";
//     invitationElement.innerHTML = `Guess the word as "${words[index][0]}"`;
// }
function onChange(event) {
    let wordGuess = event.target.value.toLowerCase();
    event.target.value = '';
    const wordAr = Array.from(wordGuess);
    let colors = searchWordArr.map((l) => {
        return wordAr.includes(l) ? 'white' : 'black';
    })
    colors.forEach((color, index) => {
        if(color === 'white') {
            if(letterElements[index].style.background !== 'white') {
                // searchWordArrLen++;
                letterElements[index].style.background=color;
            }
        }
    });
    //if(searchWordArrLen === searchWordArr.length) {
        //endGame(true);
    }

//function endGame(isSuccess) {
    // if (isSuccess) {
    //     gameOverElement.innerHTML =  `Congratulations you are winner, the game is over.
    //     Amount of trials is ${trials}`;
    //     gameOverElement.style.color = "green"
    //     invitationElement.innerHTML = '';
    // }
   
//    playAgainElement.style.display='block';
    //trialNumberElement.innerHTML = '';
    //wordTrialsElement.innerHTML = '';
    //flGameOver = true;
/*
    index = 0;
    prevInd = -1;
    */

//startGame();