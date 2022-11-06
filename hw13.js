function checkTeudatZehut(teudatStrNumber) {
    let sum = 0;
    let oddsIndex = 0;
    let arrayId = Array.from(teudatStrNumber);
    arrayId.map(function (element, index) {
        if (index % 2 != 0) {
            oddsIndex = element * 2;
            if (oddsIndex > 9) {
                let num1 = oddsIndex % 10;
                let num2 = Math.trunc(oddsIndex / 10);
                oddsIndex = num1 + num2;
            }
            sum += oddsIndex;
        }
        else {
            sum += parseInt(element);
        }
    })
    return sum % 10 == 0 ? true : false;

}
checkTeudatZehut("123456782");
//===================================================

let randomStr = "";
let minDigit = 0;
let maxDigit = 9;
function generateRandomTeudatZehut() {
    for (let i = 0; i < 8; i++) {

        randomStr += getRandomInt(minDigit, maxDigit);
    }
    console.log(randomStr);
    if (checkTeudatZehut(randomStr)) {
        randomStr += "0";
        console.log(randomStr);
        return randomStr
    } else {
        let num = parseInt(randomStr);
        let rem = num % 10;
        randomStr += 9 - rem;
        console.log(randomStr);
        return randomStr;
    }

}
function getRandomInt(min, max) {           // random number
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

generateRandomTeudatZehut();
console.log(checkTeudatZehut("015105240"));