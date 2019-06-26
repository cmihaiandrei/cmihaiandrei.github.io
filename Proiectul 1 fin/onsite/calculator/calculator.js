let number0 = document.querySelector('#number0');
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let number3 = document.querySelector('#number3');
let number4 = document.querySelector('#number4');
let number5 = document.querySelector('#number5');
let number6 = document.querySelector('#number6');
let number7 = document.querySelector('#number7');
let number8 = document.querySelector('#number8');
let number9 = document.querySelector('#number9');

let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let equals = document.querySelector('#equals');
let divide = document.querySelector('#divide');
let clear = document.querySelector('#clear');

let result = document.querySelector('#res');

let firstNumber = 0;
let secondNumber = 0;
let startBuildingSecondNumber = false;
let operation = '';

function buildNumber(numberReceived) {
    if (startBuildingSecondNumber === false) {
        firstNumber = firstNumber * 10 + numberReceived;
        result.innerHTML = firstNumber;
    } else {
        secondNumber = secondNumber * 10 + numberReceived;
        result.innerHTML = secondNumber;
    }
}

number0.addEventListener('click', function () {
    buildNumber(0);
})
number1.addEventListener('click', function () {
    buildNumber(1);
})
number2.addEventListener('click', function () {
    buildNumber(2);
})
number3.addEventListener('click', function () {
    buildNumber(3);
})
number4.addEventListener('click', function () {
    buildNumber(4);
})
number5.addEventListener('click', function () {
    buildNumber(5);
})
number6.addEventListener('click', function () {
    buildNumber(6);
})
number7.addEventListener('click', function () {
    buildNumber(7);
})
number8.addEventListener('click', function () {
    buildNumber(8);
})
number9.addEventListener('click', function () {
    buildNumber(9);
})

add.addEventListener('click', function () {
    startBuildingSecondNumber = true;
    operation = 'add';
    result.innerHTML = '+';
})

subtract.addEventListener('click', function () {
    startBuildingSecondNumber = true;
    operation = 'subtract';
    result.innerHTML = '-';
})

multiply.addEventListener('click', function () {
    startBuildingSecondNumber = true;
    operation = 'multiply';
    result.innerHTML = '*';
})

divide.addEventListener('click', function () {
    startBuildingSecondNumber = true;
    operation = 'divide';
    result.innerHTML = '/';
})

clear.addEventListener('click', function () {
    result.innerHTML = '';
})

equals.addEventListener('click', function () {
    if (operation === 'multiply') {
        let operationResult = firstNumber * secondNumber;
        result.innerHTML = operationResult;
    }
    if (operation === 'add') {
        let operationResult = firstNumber + secondNumber;
        result.innerHTML = operationResult;
    }
    if (operation === 'subtract') {
        let operationResult = firstNumber - secondNumber;
        result.innerHTML = operationResult;
    }
    if (operation === 'divide') {
        let operationResult = firstNumber / secondNumber;
        result.innerHTML = operationResult;
    }
})