
// for(var i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i)});
// }
// i=170;

// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }



// function sumDigits(number) {             hw 11
//     let a = 0;
//     let res = 0;

//     while (number != 0) {
//         if (number < 0) {
//             number *= -1;
//         }

//         a = number % 10;
//         res += a;
//         number = Math.floor(number / 10);
//     }

//     return res;
// }

// console.log(sumDigits(0123));



// function sumDigits(number) {            // hw 11 in class
//     number = Math.abs(number);
//     number = Math.trunc(number);
//     let sum = 0;
//     do {
//         let digit = number % 10;
//         number = (number - digit) / 10;
//         sum += digit;
//     }while(number != 0);
//     return sum;
// }
// console.log(sumDigits(-623));


//---------------------------------------- CW 12


// let strNum1 = "123";            //Sting
// let strNum2 = "9";
// console.log(strNum1 + strNum2); // -> 1239        с оператором + переменная вседа будет ввиде String
// console.log(strNum1 - strNum2); // -> 114         с операторами - * / значение переменной будет преобразованно в число
// console.log(strNum1 > strNum2); // -> false

                                    // convertions from String to number
// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 > num2);


// let strNumStr = '12.3ab';
// let numStr = +strNumStr;
// console.log(numStr);

// let num = parseInt(strNumStr);
// console.log(num);

// if(isNaN(numStr)) {
//     console.log("numStr is NaN");
// }

// let num10 = 123;
// let strNum10 = "" + num10;          //преобразование числа в строку

// let strNum16 = num10.toString(32);
// console.log(strNum10, strNum16);


//convertion from Morse code to number
// symbol "." -> 0
// symbol "-" -> 1
// function fromMorseToNumber(morseCode) {                     //pattern to convert from morse code to number
//     let result = 0;
//     for(let i = 0; i < morseCode.length; i++) {
//         let code = morseCode[i] == '.' ? 0 : 1
//         result = result*2 + code;
//     }
//     return result;
// }
// console.log(fromMorseToNumber("-.-."));

// function fromNumberToMorse(number) {
//     number = Math.abs(number);
//     let res = "";
//     do {
//         let digit = number % 2;
//         let sym = digit == 0 ? '.': '-';
//         res = sym + res;
//         number = Math.trunc(number / 2);

//     }while(number != 0);
//     return res;
// }
// console.log(fromNumberToMorse(33651));

// getting code from symbol

// console.log('0'.charCodeAt(0));


// // getting symbol from code

// console.log(String.fromCharCode(126));

