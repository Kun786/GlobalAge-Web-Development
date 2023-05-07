const calculate = () => {
    try {
        const firstNumber = parseFloat(document.querySelector('#firstNumber').value);
        const secondNumber = parseFloat(document.querySelector('#secondNumber').value);
        const operator = document.querySelector('#operator').value;
        const letCalculate = {
            '+' : {result: firstNumber + secondNumber , color:'green'},
            '-' : {result: firstNumber - secondNumber , color:'red'},
            '/' : {result: firstNumber / secondNumber , color:'blue'},
            '*' : {result: firstNumber * secondNumber , color:'black'},
            '%' : {result: firstNumber % secondNumber , color:'yellow'},
        }
        const getHtmlElementWhereYouWantToShowYourResult = document.querySelector('.showResult');
        const { color, result } = letCalculate[operator];
        // const color = letCalculate[operator].color
        // const color = letCalculate[operator].result
        getHtmlElementWhereYouWantToShowYourResult.innerHTML = result; 
        getHtmlElementWhereYouWantToShowYourResult.style.color = color; 
    } catch (error) {
        alert(error.message)
    }
}