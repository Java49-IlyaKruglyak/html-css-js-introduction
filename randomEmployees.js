
function createRandomEmployees(nEmployees, idDigits, minBirthYear, maxBirthYear, minSalary, maxSalary) {

    let emplArr = [];
    for (let i = 0; i < nEmployees; i++) {
        let id = randomId(idDigits);
        emplArr.push(createEmployee(id, "name".concat(id), getRandomInt(minBirthYear, maxBirthYear), getRandomInt(minSalary, maxSalary)));

    }
    return emplArr;

}
const employees = createRandomEmployees(4, 4, 1922, 2004, 4000, 6000);
console.log("Task 1", employees);



function createEmployee(id, name, birthYear, salary) {              // Factory constructor
    return { id, name, birthYear, salary };
}

function randomId(idDigits) {
    let uniqueNumbers = [];                                        // Random and Unique ID
    const pow = 10 ** (idDigits - 1);
    const randomNumber = Math.floor(Math.random() * 9 * pow + 1 * pow);
    if (uniqueNumbers.includes(randomNumber)) {
        randomId(idDigits);
    } else {
        uniqueNumbers.push(randomNumber);
    }
   
    return randomNumber;
}

function getRandomInt(min, max) {                                    // Random Integer
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//==================================Task 2=================================================

function getAvarageAge(employees) {
    let ages = [];
    for (let employee of employees) {
        ages.push(new Date().getFullYear() - employee.birthYear)
    }

    return ages.reduce((res, cur) => {
        return res + cur;
    }) / ages.length;

}
console.log("Task 2: avarage age" , getAvarageAge(employees));

//=================================Task 3==================================================
function getEmployeesBySalary(employees, minSalary, maxSalary) {
    return employees.filter(empl => empl.salary > minSalary && empl.salary < maxSalary
    ).sort((empl1, empl2) => empl1.salary - empl2.salary);

}
console.log("Task 3 sorted by salary", getEmployeesBySalary(employees, 4000, 6000));

//=================================Task 4==================================================

function increaseSalary(employees, borderSalary, percent) {
    console.log("Task 4 salary before increase", employees)

    employees.filter(employee => borderSalary > employee.salary)
        .map(employee => employee.salary += employee.salary * percent / 100)
    return employees;
}
console.log("Task 4 increased salary", increaseSalary(employees, 6000, 10));