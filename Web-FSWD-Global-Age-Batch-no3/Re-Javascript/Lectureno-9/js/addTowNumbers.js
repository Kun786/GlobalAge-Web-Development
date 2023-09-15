const addTwoNumbers = () => {
    try {
        const num1Value = document.querySelector('.first').value;
        const num2Value = document.querySelector('.second').value;
        const result = parseFloat(num1Value) + parseFloat(num2Value);
        const showResult = document.querySelector('.showResult');
        showResult.innerText = result
    } catch (error) {
        console.log(error.message)
    }
}

let num7;
let num8;
let operator;
const getVal7 = (event) => {
    try {
        num7 = parseFloat(event.target.getAttribute('data-value'));
    } catch (error) {
        console.log(error.message)
    }
}

const getVal8 = (event) => {
    try {
        num8 = parseFloat(event.target.getAttribute('data-value'));
    } catch (error) {
        console.log(error.message)
    }
}

const getVal9 = (event) => {
    try {
        num1 = event.target.getAttribute('data-value');
    } catch (error) {
        console.log(error.message)
    }
}

const getOperator = (event) => {
    try {
        operator = event.target.getAttribute('data-value');
    } catch (error) {
        console.log(error.message)
    }
}
const calc = () => {
    try {
        const calcObject ={
            '+': num7+num8,
            '/':num7/num8
        }
        const showResult = calcObject[operator];
        const screen = document.querySelector('.screen');
        const createH1 = document.createElement('h1');
        createH1.innerText = showResult;
        screen.appendChild(createH1);
    } catch (error) {
        console.log(error.message)
    }    
}

