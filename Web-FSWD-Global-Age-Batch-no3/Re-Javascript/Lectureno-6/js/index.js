
// let value = 10;

// switch (value) {
//     case 10: {}
//     let x = 10;
//     let y = 20;
//     break;
//     case 'B': 
//     console.log("case B")
//     break;
//     case 'C': 
//     console.log("case 3")
//     break;
//     case 'D': 
//     console.log("case 4")
//     break;
//     default:
//     console.log("please khuch value enter karo")
// }


// for loop

for (let x = 0; x <= 10; x++) {
    if (x % 2 == 0) {
        // console.log(x)
    }
}

//Task fucntion banao tablke ka aur wo dynamic hoo

//Phelay 100 numbers say even or odd dono nikalo

const getEvenOdd = (range) => {
    try {
        for (let x = 10; x >= range; x--) {
            // if (x % 2 === 0) {
            //     console.log(`Even Number: ${x}`)
            // } else {
            //     console.log(`Odd Number: ${x}`)
            // }
            console.log(`${x}`)
        }
    } catch (error) {

    }
}
// getEvenOdd(-2)

let human = {
    name: "Rahul",
    age: 22,
    gender: "Male",
    isMarried: false,
    isWorking: true,
    salary: 10000,
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
}

let name = "Hello World"

for (const key in human) {
    console.log(key);
   console.log(human[key])
}

// of iterable - an iterable object (array, set, strings, etc).
// in iterable - properties of object
