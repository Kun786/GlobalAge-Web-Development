const oneWayBinding = () => {
    try {
        const getH1 = document.querySelector('h1');
        const createH3 = document.createElement('h3');
        const createTextToBeEnter = document.createTextNode('Bhai yeh H3 ke Headin main Js say kar raha hoon');
        createH3.appendChild(createTextToBeEnter);
        getH1.appendChild(createH3);
        getH1.style.color = 'red';
    } catch (error) {
        console.log(error.message)
    }
}

const getValue = (data) => {
    try {
        const showInput = document.querySelector('.showInput');
        showInput.innerHTML = data.target.value
    } catch (error) {
        console.log(error.message)
    }
}

// const addTwoNumber = (num1,num2) => {

// }

// addTwoNumber(2,4)