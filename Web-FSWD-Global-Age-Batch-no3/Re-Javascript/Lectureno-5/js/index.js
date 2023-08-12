function addTwoNumbers(val1, val2){
    try {
        return (val1+val2)
    } catch (error) {
        console.log(error.message)
    }
}

let result  = addTwoNumbers(10,30);
console.log(result);

const findOdd = (number) => {
   try {
        if(number%2 !==0 ){
            return `The ${number} is odd`
        }else {
            return `The ${number} is even`
        }
   } catch (error) {
        return error.message
   }
}

console.log(findOdd(12));


// +,-,/,%(odd or even),square,cube,nth,sqrt,cubert,nthrt

let human = {
    age:111110,
    name:"asdasd"
}


 
//Calculator
// Refracted
// const arthemeticOperators = (number1, number2, operator) => {
//     const operators = {
//       '+': number1 + number2,
//       '-': number1 - number2,
//       '*': number1 * number2,
//       '/': number1 / number2,
//       '%': number1 % number2
//     };
//     return operators[operator] || 'Please pass an arithmetic operator';
//   };

//   arthemeticOperators(14,3,'/')

//Calculator
// Without Refracted
// const arthemeticOperators = (number1, number2, operator) => {
//     try {
//         if(operator === '+'){
//             return number1+number2;
//         }else if(operator === '-'){
//             return number1-number2;
//         }else if(operator === '/'){
//             return number1/number2;
//         }else if(operator === '*'){
//             return number1*number2;
//         }else if(operator === '%'){
//             return number1%number2;
//         }else{
//             return 'Please Pass an arthemetic operator'
//         }
//     } catch (error) {
//         return error.message;
//     }
// }

