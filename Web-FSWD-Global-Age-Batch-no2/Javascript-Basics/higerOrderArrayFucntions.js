// starter|
// condition
// increment or decrement 

// for
// while


// aray function 
// forEach
// map
// filter
// reduce

const usersInformation = [
    {
        name:'Ali',
        occupation:'Software Developer',
        age:25,
        gender:'M'
    },
    {
        name:'Haider',
        occupation:'Data Scientist',
        age:22,
        gender:'M'
    },
    {
        name:'Fiza',
        occupation:'Marketing Manager',
        age:20,
        gender:'F'
    },
    {
        name:'Maryum',
        occupation:'Data Scientist',
        age:27,
        gender:'F'
    }
];

// let requiredUser;
// usersInformation.forEach((element) => {
//     if(element.occupation === 'Data Scientist' || element.gender === 'F'){
//         requiredUser += JSON.stringify(element);
//     }
// })

// console.log(requiredUser);

let requiredUser;
const valueABC = usersInformation.filter((element) => {
    if(element.occupation === 'Data Scientist' || element.gender === 'F'){
        requiredUser = element;
    }
    return requiredUser;
})


// console.log(valueABC);

// const array1 = [1, 2, 3, 4];

// let z = 0;
// const result = array1.map((element) => {
//     z = z + element;
//     console.log(z);
//     return z;
// })

// console.log(result);


const numbers = [2, 5, 8, 11];

const sum = numbers.reduce((a, b) => {
  return a+b;
}, 10);

console.log(sum); // Output: 26