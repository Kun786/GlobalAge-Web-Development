// // Generic function for Arthemetic operators
//if else ke sath condition ko follow karna
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

// // fucntion arthemeticOperators(){
    
// // }

// const result = arthemeticOperators(10,2,'+');
// console.log(result);

//Object Mapping ke sath condition ko follow karna
const arthemeticOperators = (number1, number2, number3, operator) => {
    const operators = {
      '+': number1 + number2,
      '-': number1 - number2,
      '*': number1 * number2,
      '/': number1 / number2,
      '%': number1 % number2
    };
    return operators[operator] || 'Please pass an arithmetic operator';
  };

  arthemeticOperators(14,3,'/')


 



//   const addtWO = (NUM1, num2 ) => NUM1+num2
 
//With Switch Statement ke sath condition ko follow karna
// const arthemeticOperators = (number1, number2, operator) => {
//   switch(operator) {
//     case '+':
//       return number1 + number2;
//     case '-':
//       return number1 - number2;
//     case '/':
//       return number1 / number2;
//     case '*':
//       return number1 * number2;
//     case '%':
//       return number1 % number2;
//     default:
//       return 'Please pass an arithmetic operator';
//   }
// };

