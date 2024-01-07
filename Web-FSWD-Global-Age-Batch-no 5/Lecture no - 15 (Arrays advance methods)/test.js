// // mutation
// // primitive dont have mutation
// // non - primitive have mutaiton 
// Object.prototype.apna = function(){
//     return "I am Mutation"
// }
// class human  {
//     constructor(){}
//     name= "harshit";
//     age= 21
// }

// const ali  = new human();

// console.log(ali)

// // let human  = {
// //     name: "harshit",
// //     age: 21
// // }

// // human['na']

// let a: Number = 10

// let human  = {
//     name: "harshit",
//     age: 21   
// }

// let human2 = new Object();

// console.log(human2)

// let human  = {
//     name: "harshit",
//     age: 21
// }

// console.log(human)
// human.name = "asdasd"
// console.log(human)

// let fruits = ["apple", "mango", "banana"]
// fruits[1] = "grapes"
// console.log(fruits)

let nadra = ["harshit", "kumar", "khan", "ali","kumar","kumar"];
// let copyOfNadra = nadra.splice(2,0,"abbas","äsdas","qweqw")
// console.log(copyOfNadra)
// console.log(nadra)

const newValue = nadra.filter((Element) => {
    return Element === "kumar";
})
console.log(nadra)
console.log(newValue)

// reduce
// some
// every
// find