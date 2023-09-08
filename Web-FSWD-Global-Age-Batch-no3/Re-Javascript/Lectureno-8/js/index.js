
// slice
const fruits = ["Apple", "Mango", "Orange", "Banana", "Kiwi", "Watermelon", "Strawberry", "Cherry"];
const meriMarziKeValue = fruits.slice(-3,-1); //Slice does not include the last value/element
// console.log(meriMarziKeValue);

//single value to wo wahan say shuru karay ga aur end tak jae 
//Postive Value to wo wahan say shuru karay ga aur end  tak jae par end exclude hoo ga
//Negative Value to wo wahan say shuru karay ga aur start tak jae
// splice


//Splice 
const fruit = ["Apple", "Mango", "Orange", "Banana", "Kiwi", "Watermelon", "Strawberry", "Cherry"];
const removedFruit = fruit.splice(1, 0, "berry"); //before
// console.log(removedFruit);
// console.log(fruit)

//Higher Order array Fucntions
// for(let i =0; i<fruit.length; i++){
//     console.log(fruit[i]);
// }

// Array.forEach((values)=>{
//     //It just Loops
// })

// Array.map(()=>{
//     // it loops and return the value 
// })

// Array.filter(()=>{
// // it loops and return the value    
// })

// const getValue = fruit.map((values)=>{
//     if(values === "Mango"){
//         return values
//     }
// })

// console.log(getValue)

const users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Jack", age: 24 },
    { id: 4, name: "Jill", age: 26 },
]

// let newArray=[]
// for(let i =0; i<users.length; i++){
//     if(users[i].age > 20){
//         newArray.push(users[i])
//     }
// }

const filteredUsers = users.filter((user)=>{
    return user.age > 20
})

// console.log(filteredUsers)

const changeColor = ()=>{
 try {
    const getHtmlElement = document.querySelector(".my-text");
    // getHtmlElement.style.color = "red";
    // console.log(getHtmlElement)
    getHtmlElement.innerHTML="Hi I have chnaged you Text";
    getHtmlElement.style.color = "green"
 } catch (error) {
    console.log(error.message)
 }   
}

const createList = () => {
    try {
        const getHtmlElement = document.querySelector(".my-list");
        const createLi = document.createElement("li");
        const createTextForLi = document.createTextNode("list create from js");
        createLi.appendChild(createTextForLi);
        getHtmlElement.appendChild(createLi);
    } catch (error) {
        console.log(error.message)
    }
}