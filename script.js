let firstNumber = "";
let secondNumber = "";
let operator = "";
let solution;
let equal = false;

let displayTextOne = document.querySelector("#displayTextOne");
let displayTextTwo = document.querySelector("#displayTextTwo");

let buttonZero = document.querySelector("#zero");
let buttonOne = document.querySelector("#one");
let buttonTwo = document.querySelector("#two");
let buttonThree = document.querySelector("#three");
let buttonFour = document.querySelector("#four");
let buttonFive = document.querySelector("#five");
let buttonSix = document.querySelector("#six");
let buttonSeven = document.querySelector("#seven");
let buttonEight = document.querySelector("#eight");
let buttonNine = document.querySelector("#nine");

let buttonPlus = document.querySelector("#plus");
let buttonMinus = document.querySelector("#minus");
let buttonMultiply = document.querySelector("#multiply");
let buttonDivide = document.querySelector("#divide");
let buttonReset = document.querySelector("#reset");
let buttonBackspace = document.querySelector("#backspace");
let buttonEqual = document.querySelector("#equal");

buttonReset.addEventListener("click", function(){
    reset();
});

buttonPlus.addEventListener("click", function(){
    if (firstNumber === "" || operator !== ""){
        return;
    }
    operator = "+";
    displayTextOne.textContent = firstNumber + " " + operator;
});

buttonMinus.addEventListener("click", function(){
    if (firstNumber === "" || operator !== ""){
        return;
    }
    operator = "-";
    displayTextOne.textContent = firstNumber + " " + operator;
});

buttonMultiply.addEventListener("click", function(){
    if (firstNumber === "" || operator !== ""){
        return;
    }
    operator = "x";
    displayTextOne.textContent = firstNumber + " " + operator;
});

buttonDivide.addEventListener("click", function(){
    if (firstNumber === "" || operator !== ""){
        return;
    }
    operator = "÷";
    displayTextOne.textContent = firstNumber + " " + operator;
});

buttonOne.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("1");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("1");
        displayTextOne.textContent = firstNumber;
    }
});

buttonTwo.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("2");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("2");
        displayTextOne.textContent = firstNumber;
    }
});

buttonThree.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("3");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("3");
        displayTextOne.textContent = firstNumber;
    }
});

buttonFour.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("4");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("4");
        displayTextOne.textContent = firstNumber;
    }
});

buttonFive.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("5");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("5");
        displayTextOne.textContent = firstNumber;
    }
});

buttonSix.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("6");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("6");
        displayTextOne.textContent = firstNumber;
    }
});

buttonSeven.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("7");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("7");
        displayTextOne.textContent = firstNumber;
    }
});

buttonEight.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("8");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("8");
        displayTextOne.textContent = firstNumber;
    }
});

buttonNine.addEventListener("click", function(){
    if(equal === true){
        reset();
    }
    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("9");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("9");
        displayTextOne.textContent = firstNumber;
    }
});

buttonEqual.addEventListener("click", function(){
    evaluate();
    displayTextTwo.textContent = solution;
    equal = true;
});

function reset(){
    displayTextOne.textContent = "";
    displayTextTwo.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    solution = undefined;
    equal = false;
}

function evaluate(){
    if (operator === "+"){
        solution = add(firstNumber, secondNumber);
    } else if (operator === "-"){
        solution = subtract(firstNumber, secondNumber);
    } else if (operator === "x"){
        solution = multiply(firstNumber, secondNumber);
    } else if (operator === "÷"){
        solution = divide(firstNumber, secondNumber);
    } else {
        solution = "ERROR";
    }
}

function addToSecondNumber(number){
    secondNumber = secondNumber + number;
}

function addToFirstNumber(number){
    firstNumber = firstNumber + number;
}

function add(number1, number2){
    let num = Number(number1) + Number(number2);
    return solution = Math.round(num * 1e8) / 1e8;
}

function subtract(number1, number2){
    let num = Number(number1) - Number(number2);
    return solution = Math.round(num * 1e8) / 1e8;
}

function multiply(number1, number2){
    let num = Number(number1) * Number(number2);
    return solution = Math.round(num * 1e8) / 1e8;
}

function divide(number1, number2){
    let num = Number(number1) / Number(number2);
    return solution = Math.round(num * 1e8) / 1e8;
}

function operate(number1, operator, number2){
    if(operator === "+"){
        return add(number1, number2);
    } else if (operator === "-"){
        return subtract(number1, number2);
    } else if (operator === "x"){
        return multiply(number1, number2);
    } else if (operator === "%"){
        return divide(number1, number2);
    } else {
        return "ERROR";
    }
}