//Grading App





// Calculator 

// const calculator = (kisKaTable, kahanTakTable) => {
//     try {
//         for (let x = 1; x<=kahanTakTable; x++){
//             console.log(`${kisKaTable} * ${x} = ${kisKaTable*x}`);
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// calculator(2,10);


//Array


// const numberArray = [
//     'ali',
//     'zain',
//     'haroon',
//     'asd',
//     'zxc',
//     'oiu'
// ];
// console.log(numberArray[2]);

const userDetails = [
    'helol',
    18,
    {
        name:'ali',
        age:20,
        city:'lahore'
    },
    {
        name:'bilal',
        age:25,
        city:'lahore'
    },
    {
        name:'shahid',
        age:30,
        city:'lahore'
    },
    {
        name:'zain',
        age:40,
        city:'lahore'
    },
    {
        name:'yasir',
        age:18,
        city:'lahore'
    }
]


const parentFuntion = (x) => {
    const getResult = x;
    return getResult;
}

const childFucntion = () => {
    console.log(0)
}

const myResult = parentFuntion(childFucntion);
console.log('line no 74'+myResult);