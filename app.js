
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



function sumDigits(number) {            // hw 11 in class
    number = Math.abs(number);
    number = Math.trunc(number);
    let sum = 0;
    do {
        let digit = number % 10;
        number = (number - digit) / 10;
        sum += digit;
    }while(number != 0);
    return sum;
}
console.log(sumDigits(-623));