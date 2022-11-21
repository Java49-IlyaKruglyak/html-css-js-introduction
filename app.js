// const person = {id: 123, first_name: 'Vasya', last_name: 'Ivanov',
//  year: 2000, address: {city: 'Lod', street: 'Sklov', app: 100}};

//  const yearExp = "ye" + "ar";
//  console.log(person[yearExp]);


 function displayOccurrences(strings) {
    const occurrences = {};
    strings.forEach(element => {
       if(occurrences[element]) {
            occurrences[element]++;
       }else{
        occurrences[element] = 1;
        
       }
    });
    //console.log(occurrences);
    //console.log(Object.entries(occurrences));
    const occurrencesArray = Object.entries(occurrences);
   
    occurrencesArray.sort((e1, e2) => e2[1] - e1[1])
    console.log(occurrencesArray);
 }
 

//  const x = {};
//  const string = 'abc';
//  x[string] = 1;
//  console.log(x);
//  x[string]++;
//  console.log(x);
const strings = ['blr', 'a','lmn', 'abc', 'lmn', 'lmn', 'abc', 'a','lmn', 'a'];
displayOccurrences(strings);

