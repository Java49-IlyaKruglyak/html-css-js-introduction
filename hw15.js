function minMax(numbers) {
    let min = numbers.reduce((res, cur) => cur < res ? cur : res)
    let max = numbers.reduce((res, cur) => cur > res ? cur : res)

    return [min, max]
}
console.log(minMax([4, 3, -5, 2, 1, 7, 0, -5, 0]));


// //=============================================


function deleteWithPrefix(strings, prefix) {
    let filtered = strings.filter(str => str.substring(0, prefix.length) != prefix)

    return filtered;
}

console.log(deleteWithPrefix(["abc", "old_abc", "lmn", "123", "old_lmn"], "old_"));



//==============================================


let numbers = [1, 6, 3, 8, 5, 2, 7, 4];
function getSortedEvenOdd(numbers) {

    let sorted = [];
    let evenNumbers = numbers.filter(n => n % 2 == 0).sort((a, b) => a - b);
    let oddNumbers = numbers.filter(n => n % 2 != 0).sort((a, b) => b - a);
    //sorted.splice(0,0, ...evenNumbers, ...oddNumbers)
    sorted = evenNumbers.concat(oddNumbers);
    return sorted;
}

// function getEvenNumbers(numbers) {
//     let evenNumbers = [];
//     for (i = 0; i > numbers.length; i++) {
//         if (numbers[i] % 2 == 0) {
//             evenNumbers.push(numbers[i])
//         }
//     }
//     return evenNumbers;
// }
// function getOddNumbers(numbers) {
//     let oddNumbers = [];
//     for (i = 0; i > numbers.length; i++) {
//         if (numbers[i] % 2 != 0) {
//             oddNumbers.push(numbers[i])
//         }
//     }
//     return oddNumbers;


// }
