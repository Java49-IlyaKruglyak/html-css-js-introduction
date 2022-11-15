const word = "table";
let count = 6;
const counterField = document.querySelector(".counter")
counterField.value = count;
const textInput = document.querySelector(".textInput")
const message = document.querySelector(".message")
const letterElements = document.querySelectorAll(".letter-guess")
function onChange(event) {
    const N_LETTERS = 5;
    const wordGuess = event.target.value
    event.target.value = '';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`);
    } else {
        count--;
        counterField.value = count;
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index > -1) {
                res = index == i ? 'green' : 'yellow'

            }
            return res;
        })
        colors.forEach((c, i) =>
            letterElements[i].style.color = c)

        let greenLatters = 0;
        colors.forEach(c => {
            if (c == 'green') {
                greenLatters++;
            }
        })
        if (greenLatters == 5 && count >= 0) {
            message.innerHTML = "Congratulations - you have guessed word";
            message.style.color = "green";
            textInput.disabled = true;
        }
        else if(count <= 0){
            message.innerHTML = "Sorry – your guess trials have ended up";
            message.style.color = "red";
            textInput.disabled = true;

        }
    }

}
function restart(){
    textInput.disabled = false;
    count = 6;  
    counterField.value = count;
    letterElements.innerHTML = '';
    message.innerHTML = "Good Luck";


}        