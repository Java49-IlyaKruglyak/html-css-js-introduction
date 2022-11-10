function ulSurround(strings) {
    let res = strings.map(str => `<li>${str}</li>`)

    res.unshift('<ul>');
    res.push('</ul>');
    return res;
}


let ar = ["abc", "lmn", "cd"];
console.log(`input: ${ar} output: ${ulSurround(ar)}`)



//========================================================


function count(array, element) {
    return array.reduce((res, cur) => cur == element ? res+1 : res, 0);
}
let str = "lmn";
console.log(`input: ${ar}, counter of ${str} is ${count(ar, str)}`)