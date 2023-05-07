
// let Numbers = [10,11,12,13,14,15,16,17,18] 
// console.log(Numbers);
// console.log(typeof(Numbers))

// let Names = ['Ali','Ahmed','Abdul','Jamil']
// console.log(typeof(Names))

// let Humans = [
//     {
//         Name:'Ali',
//         Age:8
//     },
//     {
//         Name:'Ahmed',
//         Age:12
//     },
//     {
//         Name:'Abdul',
//         Age:20
//     }
// ]

// Humans.push('Hello World')
// console.log(Humans)
// let lastvalue = Humans.pop();
// console.log(lastvalue)


const people  = [
    {
        Name:'Khan',
        Age:10,
        City:'Gilgit'
    },
    {
        Name:'Mayer',
        Age:15,
        City:'Lahore'
    },
    {
        Name:'Ali',
        Age:20,
        City:'Lahore'
    }
]

const tempPeople = people;
console.log(people.length);
console.log(Object.keys(people));
tempPeople.splice(1,2,'Apple');
console.log(tempPeople);
console.log(people);




Michael — Today at 8:40 PM
const people  = [
    {
        Name:'Khan',
        Age:10,
        City:'Gilgit'
    },
    {
        Name:'Mayer',
        Age:15,
        City:'Lahore'
    },
    {
        Name:'Ali',
        Age:20,
        City:'Lahore'
    }
]

const tempPeople = people.slice(1,2);

// tempPeople will be, without affecting the people array: 
    [{
        Name:'Mayer',
        Age:15,
        City:'Lahore'
    },
    {
        Name:'Ali',
        Age:20,
        City:'Lahore'
    }
]
const addToTempPeople = [...tempPeople, "apple"]
 
Kun — Today at 8:49 PM
Great Example Michael Thank you


Michael — Today at 8:50 PM
You can make it shorter, I split it to make it clear for you: const tempPeople = [...people.slice(1,2), "apple"];
Kun — Today at 8:51 PM
Great
well I alwasy get confused with spread oprator in array
any important or usefularticle to read about it
Michael — Today at 8:51 PM
Take some time to learn Array and Object operations, it will really help you out
Kun — Today at 8:52 PM
got it thanks
and about spread operator with array?>



There are probably a ton of blogposts about it if you google, but you can never go wrong with checking MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Also, https://arrayexplorer.netlify.app/ and https://objectexplorer.netlify.app/ might be useful to visually see what different operations do