function fromNumberToString(number, base) {

    let result = "";

    while (number != 0) {
        let reminder = Math.trunc(number % base);
        if (reminder > 9){
        reminder = String.fromCharCode(87 + reminder);
        }
        number = Math.trunc(number / base);
        result = reminder + result;
    }
return result;
}
console.log(fromNumberToString(900550, 36));





function fromStringToNumber(string, base) {          
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if (code >= 48 && code <= 57) {
            code -= 48;
        }

        else if(code >= 97 && code <= 122) {
            code -= 87;

        } else {
           return "error";
        }
       
        result = result*base + code;
    }


    return result;

}

console.log(fromStringToNumber('java', 36));