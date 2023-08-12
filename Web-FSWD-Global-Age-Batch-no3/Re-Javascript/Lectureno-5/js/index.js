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




