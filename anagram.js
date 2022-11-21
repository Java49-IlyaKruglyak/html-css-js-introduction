const occurrences = {};

function isAnagram(str1, str2) {
    const str1Arr = Array.from(str1);
    const str2Arr = Array.from(str2);

    if (str2Arr.length != str1Arr.length) {
         return false; 
        }

    displayOccurrences(str1Arr);

    for (let i = 0; i < str2Arr.length; i++) {
        if (occurrences[str2Arr[i]] == undefined) {
            return false;

        } else {
            occurrences[str2Arr[i]] = occurrences[str2Arr[i]] - 1;
        }

        if (occurrences[str2Arr[i]] < 0) {
            return false;
        }
    } return true;
}

function displayOccurrences(str1Arr) {
    str1Arr.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    })
}
//true
console.log(isAnagram("yellow", "weloly"))
console.log(isAnagram("yellow", "leloyw"))
console.log(isAnagram("yellow", "wolley"))
console.log(isAnagram("yellow", "weloyl"))
//false
console.log(isAnagram("yellow", "weloll"))
console.log(isAnagram("yellow", "leloy"))
console.log(isAnagram("yellow", "wollet"))
console.log(isAnagram("yellow", "weloyo"))