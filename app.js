let ar = [];
ar[10000] = 100;
ar[1] = [1, 2, 3];
console.log("length of array = ",ar.length);
ar[0] = "hello";
console.log("10000-th element = ", ar[10000]);
console.log("0-th element = ", ar[0]);
console.log("1-th element = ", ar[1]);
let str = "Hello";
let arStr = Array.from(str); //getting array of the string's symbols
console.log("String 'Hello' -> array is ", arStr);
// for (let i = 0; i < arStr.length; i++) {
//     console.log("element at index ", i, arStr[i]);
// }
function println(element, index, array) {
    console.log("element at index ", index, element);
}
arStr.forEach(println);
let arCodeAscii = arStr.map(function(symbol, index) {
    return index % 2 == 0 ? symbol.charCodeAt() : symbol;
})
console.log(arStr, arCodeAscii);
let sumAscii = arStr.reduce(function(res, cur) {
    return res + cur.charCodeAt();
}, 0)
console.log("sum of ascii ", sumAscii)
console.log(arStr.reduce(function(res, cur) {
return res + cur
}, ""));
function checkTeudatZehut(teudatStrNumber) {
    //TODO
    //control sum of for even index digit value, for odd index digit * 2
    //control sum should be divide on 10 with no remainder
    //example 123456782 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 2 => true
    //    123456783 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 3 => false
}
function generateRandomTeudatZehut() {
    //TODO
    //returns string of 9 symbols matching checkTeudatZehut
    //make 8 random digits from 0 to 9
    //9 - th symbol should be with accordance of matching
    //to get random digit Math.round(Math.random() * 9)
}
