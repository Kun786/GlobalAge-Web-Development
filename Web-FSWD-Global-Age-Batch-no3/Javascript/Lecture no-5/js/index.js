
// normal if

const armyTest = (candidate) =>{
    try {
        let check1, check2, check3;
        // let age = candidate.age;
        // let gender = candidate.gender;
        // let country = candidate.country;
        let { age, gender, country } = candidate
        if(age > 20){
            console.log('You age is valid')
            check1 = true
        }
        if(gender === 'Male'){
            console.log('You are a male');
            check2 = true
        }
        if(country === 'pakistan'){
            console.log('You are from pakistan');
            check3 = true
        }

        if(check1 && check2 && check3 ){
            console.log('You are an army member')
        }else{
            console.log('You are not an army member')
        }
    } catch (error) {
        console.log(error.message)
    }
}

// normal if


// if else

// if else


// if else if
const calculateThePrice = function(bookDeatails){

    let { bookTitle, bookPrice } = bookDeatails;
    if(bookTitle === 'javascript' && bookPrice > 100){
        console.log(`This is a ${bookTitle} book with the price ${bookPrice}`)
    }else if(bookTitle === 'maths' && bookPrice > 50){
        console.log(`This is a ${bookTitle} book with the price ${bookPrice}`)
    }else if(bookTitle ==='english' && bookPrice > 150){
        console.log(`This is a ${bookTitle} book with the price ${bookPrice}`)
    }
}
// if else if

let candidate = {
    age: 11,
    gender: 'Male',
    country: 'pakistan'
}

// armyTest(candidate);

let bookDeatails = {
    bookTitle:'english',
    bookPrice:170
}

calculateThePrice(bookDeatails)

// "this is the price "+ price

// `this is  the price ${price}`

// "hi" + "hello" 

// "hi" + 8
// "Hi my name is " + name

// `Hi my name is ${name}`