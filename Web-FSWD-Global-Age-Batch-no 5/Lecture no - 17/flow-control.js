// Filtering out the employees who are older than 20

// function add() {

// }

// const add = function(){

// }

// const add = () => a+b
const hrEmployees = [
    { name: "Zahid", age: 40, gender: "male", city: "karachi" },		
    { name: "Shahzad", age: 27, gender: "female", city: "karachi" },
    { name: "Shahzaib", age: 22, gender: "female", city: "lahore" },
    { name: "Ali", age: 21, gender: "male", city: "lahore" },
    { name: "Ahmed", age: 10, gender: "male", city: "karachi" },
    { name: "Usman", age: 20, gender: "male", city: "lahore" },
    { name: "Umar", age: 18, gender: "female", city: "karachi" },
    { name: "Rizwan", age: 20, gender: "female", city: "lahore" },
    { name: "Hassan", age: 14, gender: "male", city: "karachi" },
    { name: "Bakar", age: 20, gender: "female", city: "karachi" },
];



// method 1 simple if else with filter fucntion
// Allowed Employees hould have age greater than 20

const allowedEmployees = hrEmployees.filter((employee) => {
    if (employee.age > 20) {
        return employee
    }
})

// method 2 ternary operator
// Allowed Employees hould have age greater than 20 without if else

const allowedEmployees2 = hrEmployees.filter((a) => a.age>20);

// method 3 arrow function
// Allowed Employees hould have age greater than 20 without if else using ternary operator

const allowedEmployees3 = hrEmployees.filter((a) => a.age>20 ? a : null)
// console.log(allowedEmployees3)


// if Else Syntax

// if() {

// }else if(){

// } else if(){

// } else if(){

// }else{

// }


const filterOutMyEmployees = {
    "age-greater-than-20": hrEmployees.filter((a) => a.age>20),
    "should-be-a-girl": hrEmployees.filter((a) => a.gender === "female"),
    "should-be-from-lahore": hrEmployees.filter((a) => a.city === "lahore"),
    "should-be-from-karachi": hrEmployees.filter((a) => a.city === "karachi")
}

const getData = filterOutMyEmployees["age-greater-than-20"]
console.log(getData)