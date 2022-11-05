
function checkTeudatZehut(teudatStrNumber) {

    let sum = 0;
    let arrayId = Array.from(teudatStrNumber);
    
   let check = arrayId.map(function (element, index) {

        if (index % 2 != 0) {
           let oddsIndex = element * 2;
            
            if (oddsIndex > 9) {
                let oddsIndex2 = oddsIndex.toString();
                let arTemp = Array.from(oddsIndex2);
                let num1 = parseInt(arTemp[0]);
                let num2 = parseInt(arTemp[1]);
                oddsIndex = num1 + num2;
                
            }
               sum = sum + oddsIndex;
        } 

        else {
            sum = sum + parseInt(element);
           

        }

    })
    return sum % 10 == 0 ? console.log(true) : console.log(false);
}