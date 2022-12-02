const inputElements = document.querySelectorAll(".form-class [name]");
const errorMsg = document.querySelector(".error");
const minSalary = 1000;
const maxSalary = 40000;
const timerSet = 5000;
datePickerId.max = new Date().toISOString().split("T")[0];    //gets current date 
    

function onSubmit(event){
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce((res, curr) => {
        res[curr.name] = curr.value;
        return res;
    }, {}
    )
    console.log(employee);
}

function onChange(event) {
    if(event.target.name == "salary") {
        if(+event.target.value < minSalary || +event.target.value > maxSalary) {
            event.target.value=''
            error(event, `salary need to be between ${minSalary} and ${maxSalary}`)
            
        }
    }
}
function error(event, message) {
    event.target.value=''
    errorMsg.innerHTML = "Error: " + message;
    timer = setTimeout(() => {
        errorMsg.innerHTML = '';
    }, timerSet)

}