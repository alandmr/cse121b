/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1+number2;
}

function addNumbers(){
    let addNumber1 = parseInt(document.querySelector('#add1').value);
    let addNumber2 = parseInt(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener('click',addNumbers)

/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2){
    return number1-number2;
}

const subtractNumbers = function(){
    let subtractNumber1 = parseInt(document.querySelector('#subtract1').value);
    let subtractNumber2 = parseInt(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);

}

document.querySelector("#subtractNumbers").addEventListener('click',subtractNumbers)

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
    return number1*number2
}

const mulitplyNumbers = () =>{
    let factorNumber1 = parseInt(document.querySelector('#factor1').value);
    let factorNumber2 = parseInt(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);

}

document.querySelector("#multiplyNumbers").addEventListener('click',mulitplyNumbers)

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => {
    return number1/number2
}

const divideNumbers = () =>{
    let dividendNumber = parseInt(document.querySelector('#dividend').value);
    let divisorNumber = parseInt(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);

}

document.querySelector("#divideNumbers").addEventListener('click',divideNumbers)    


/* Decision Structure */
let currDate = new Date();
let currYear;
currYear = currDate.getFullYear();
document.querySelector("#year").innerHTML = `${currYear}`;


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = `${numbersArray}`;

/* Output Source Array */
let sourceArray = numbersArray.filter(odds => odds%2 === 1);

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = `${sourceArray}`;

/* Output Evens Only Array */
sourceArray = numbersArray.filter(evens => evens%2 === 0);
document.querySelector("#evens").innerHTML = `${sourceArray}`;

/* Output Sum of Org. Array */
let iniValue = 0;
sourceArray = numbersArray.reduce((acc,crrValue) => acc+crrValue,iniValue);
document.querySelector("#sumOfArray").innerHTML = `${sourceArray}`;

/* Output Multiplied by 2 Array */
sourceArray = numbersArray.map(arg => arg*2);
document.querySelector("#multiplied").innerHTML = `${sourceArray}`;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = sourceArray.reduce((acc,crrValue) => acc+crrValue,iniValue);
document.querySelector("#sumOfMultiplied").innerHTML = `${sumOfMultiplied}`;
