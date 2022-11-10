let src = [1,2,3,4,5,6,7]; 
let dst = [10,20,30,40,50,60,70];


function arrayCopy(src,srcIndex,dst,dstIndex,length){
   let slicedSrc =  src.slice(srcIndex,(srcIndex+length));
   dst.splice(dstIndex,0, ...slicedSrc);
return console.log(dst);
}

arrayCopy(src, 3, dst, 4, 3);


