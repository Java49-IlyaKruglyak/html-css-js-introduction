let strings = ["abc", "lmn", "cd"];
function surroundAll(strings){
let surround = strings.map(function (element, i) {
    return `<li>${strings[i]}</li>`
});
surround.unshift('<ul>');
surround.push('</ul>');

return surround;
}
surroundAll(strings);
//=======================================================


let stringAr = ["abc", "lmn", "cd", "abc", "abc"];
let counter = 0;
function count(value) {
    let counter = 0;
    stringAr.forEach(element => {
        if (element == value)
            counter++;

    }); return counter;
}
count("abc");

//========================================================

let src = [1,2,3,4,5,6,7]; 
let dst = [10,20,30,40,50,60,70];


function arrayCopy(src,srcIndex,dst,dstIndex,length){
   let slicedSrc =  src.slice(srcIndex,(srcIndex+length));
   dst.splice(dstIndex,0, ...slicedSrc);
return dst;
}

arrayCopy(src, 3, dst, 4, 3);


//==========================================================
// let numbers=[1,2,3,4,5,6,7];
// function move(array,index,offset){
//             offset == 0 ? 1 : -1;
//        let array = numbers.splice(index, 0, offset)        

            
// }

function move(array, index, offset) {
    let movedElem = array.splice(index, 1)[0];
    array.splice(index + offset, 0, movedElem);
    return array;
}