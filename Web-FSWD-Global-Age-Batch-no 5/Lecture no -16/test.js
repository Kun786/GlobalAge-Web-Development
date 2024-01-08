// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 3;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator * currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// let total = 0;
// array1.forEach((elements) => {
//     total += elements
// })

// console.log(`here is my own reduce fuction ${total}`)

// const array = [2, 2];

// // // Checks whether an element is even
// // const even = (element) => element % 2 === 0;
// const myLogic = (arrayElement) => arrayElement === 2;

// console.log(array.every(myLogic));

// Coal Mine Factory hiring Process (Only Males)

const human = [
    {
        name: 'sami',
        age: 23,
        gender: 'male'
    },
    {
        name: 'sara',
        age: 24,
        gender: 'female'
    },
    {
        name: 'sara',
        age: 24,
        gender: 'female'
    }
]


const enteringMine = human.every((element) => element.gender === 'male');

const allowMiners = (enteringMine) => {
    if (enteringMine) {
        return true
    } else {
        return false
    }
    // enteringMine ? 'please enter' : 'cannt enter';
}

console.log(allowMiners())