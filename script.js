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
let buttonDot = document.querySelector("#dot");

buttonBackspace.addEventListener("click", function(){
    if (solution === "ERROR"){
        return;
    }
    if(secondNumber !== ""){
        secondNumber = secondNumber.slice(0,-1);
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    }else if (secondNumber === ""){
        if (operator !== ""){
        operator = "";
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
        }else if (secondNumber === "" && firstNumber !== ""){
        firstNumber = firstNumber.slice(0,-1);
        displayTextOne.textContent = firstNumber;
        }
    }
});

buttonReset.addEventListener("click", function(){
    reset();
});

buttonPlus.addEventListener("click", function(){
    if (solution === "ERROR"){
        return;
    }
    if (operator !== "" && secondNumber !== ""){
        evaluate();
    }
    operator = "+";
    displayTextOne.textContent = firstNumber + " " + operator;
    equal = false;
});

buttonMinus.addEventListener("click", function(){
    if (solution === "ERROR"){
        return;
    }
    if (operator !== "" && secondNumber !== ""){
        evaluate();
    }
    operator = "-";
    displayTextOne.textContent = firstNumber + " " + operator;
    equal = false;
});

buttonMultiply.addEventListener("click", function(){
    if (solution === "ERROR"){
        return;
    }
    if (operator !== "" && secondNumber !== ""){
        evaluate();
    }
    operator = "x";
    displayTextOne.textContent = firstNumber + " " + operator;
    equal = false;
});

buttonDivide.addEventListener("click", function(){
    if (solution === "ERROR"){
        return;
    }
    if (operator !== "" && secondNumber !== ""){
        evaluate();
    }
    operator = "÷";
    displayTextOne.textContent = firstNumber + " " + operator;
    equal = false;
});

buttonDot.addEventListener("click", function(){
    if (solution === "ERROR"){
        return;
    }

    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        if (secondNumber.includes(".") || secondNumber === ""){
        return;
    }
        addToSecondNumber(".");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        if (firstNumber.includes(".") || firstNumber === ""){
        return;
    }
        addToFirstNumber(".");
        displayTextOne.textContent = firstNumber;
    }
});

buttonZero.addEventListener("click", function(){
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
    }

    if(operator === "+" || operator === "-" || operator === "x" || operator === "÷"){
        addToSecondNumber("0");
        displayTextOne.textContent = firstNumber + " " + operator + " " + secondNumber;
    } else{
        addToFirstNumber("0");
        displayTextOne.textContent = firstNumber;
    }
});

buttonOne.addEventListener("click", function(){
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }

    if (equal === true){
        reset();
        equal = false;
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
    if (solution === "ERROR"){
        return;
    }
    if (operator === "" || firstNumber === "" || secondNumber === "" || equal == true){
        return;
    }

    evaluate();

    firstNumber = solution;
    displayTextOne.textContent = firstNumber;
    equal = true;
    operator = "";
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
        displayTextTwo.textContent = solution;
        firstNumber = solution;
        displayTextOne.textContent = firstNumber;
        secondNumber = "";
    } else if (operator === "-"){
        solution = subtract(firstNumber, secondNumber);
        displayTextTwo.textContent = solution;
        firstNumber = solution;
        displayTextOne.textContent = firstNumber;
        secondNumber = "";
    } else if (operator === "x"){
        solution = multiply(firstNumber, secondNumber);
        displayTextTwo.textContent = solution;
        firstNumber = solution;
        displayTextOne.textContent = firstNumber;
        secondNumber = "";
    } else if (operator === "÷"){
        solution = divide(firstNumber, secondNumber);
        displayTextTwo.textContent = solution;
        firstNumber = solution;
        displayTextOne.textContent = firstNumber;
        secondNumber = "";
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
    if (secondNumber === "0"){
        return solution = "ERROR";
    }
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
    }
}

//keyboard support

document.addEventListener("keydown", function(key){
    key = key.key;
    console.log(key);
    if (key === "1"){
        buttonOne.click();
    } else if (key === "2"){
        buttonTwo.click();
    } else if (key === "3"){
        buttonThree.click();
    } else if (key === "4"){
        buttonFour.click();
    } else if (key === "5"){
        buttonFive.click();
    } else if (key === "6"){
        buttonSix.click();
    } else if (key === "7"){
        buttonSeven.click();
    } else if (key === "8"){
        buttonEight.click();
    } else if (key === "9"){
        buttonNine.click();
    } else if (key === "." || key === ","){
        buttonDot.click();
    } else if (key === "+"){
        buttonPlus.click();
    } else if (key === "-"){
        buttonMinus.click();
    } else if (key === "x" || key === "X" || key === "*"){
        buttonMultiply.click();
    } else if (key === "/"){
        buttonDivide.click();
    } else if (key === "Backspace"){
        buttonBackspace.click();
    } else if (key === "Escape"){
        buttonReset.click();
    } else if (key === "0"){
        buttonZero.click();
    } else if (key === "Enter" || key === "="){
        buttonEqual.click();
    }
})
