let firstNumber;
let secondNumber;
let operator;

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
let buttonMulitply = document.querySelector("#multiply");
let buttonDivive = document.querySelector("#divide");
let buttonReset = document.querySelector("#reset");
let buttonBackspace = document.querySelector("#backspace");
let buttonCommaLeft = document.querySelector("#commaLeft");
let buttonCommaRight = document.querySelector("#commaRight");

buttonReset.addEventListener("click", function(){

});

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
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

console.log(operate(4,4));