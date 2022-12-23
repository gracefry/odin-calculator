function add(a, b) {
    return +(a) + +(b);
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b);
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            break;
    }
}

let a = "";
let b = "";
let operator = "";

const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
const equals = document.querySelector("#equal");

numbers.forEach(button => button.addEventListener('click', (e) => {
    screen.textContent += e.target.textContent;
}));

operators.forEach(button => button.addEventListener('click', (e) => {
    if (screen.textContent != "" && a == "") {
        a = screen.textContent;
        screen.textContent = "";
        operator = e.target.textContent;     
    }
}));

equals.addEventListener('click', (e) => {
    if (b == "") {
        b = screen.textContent;
        screen.textContent = "";
    }

    let result = operate(operator, a, b);
    console.log(result);

    // Reset
    a = "";
    b = "";
    operator = "";
})
