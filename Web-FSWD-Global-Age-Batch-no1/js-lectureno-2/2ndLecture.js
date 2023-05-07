//Operators 
//Arthemetic Operators +,-,/,%

function addTwoNumbers(number1 , number2){
    let result;
    result = number1 + number2;
    return result;
}
let aditionReuslt = addTwoNumbers(10,9);

function multiplyTwoNumbers(number1, number2){
    let result;
    result = number1 * number2;
    return result;
}

let a = multiplyTwoNumbers(8,2);

function generalArithmeticOperation(number1, number2, operator){
    let result;
    if(operator === '+'){ 
        result = number1+number2;
    }else if(operator === '-'){
        result = number1-number2
    }else if(operator === '*'){
        result = number1*number2
    }else if(operator === '/'){
        result = number1/number2
    }else if(operator === '%'){
        if(number1%number2 === 0){
            result = 'Your number is Even';
        }else{
            result = 'Your number is Odd';
        }
    }else{
        return 'Please proved a valid Arthemetic';
    }
    return result;
}
let value = generalArithmeticOperation(10,3,'%');

function timesTable(konSaNumber, kahanTak){
    for(let x=1; x<=kahanTak; x++){
        console.log(konSaNumber + ' x ' +x+ ' = ' +konSaNumber*x);

        console.log(`${konSaNumber} x ${x} = ${konSaNumber * x}`)
    }
}

timesTable(8,10);