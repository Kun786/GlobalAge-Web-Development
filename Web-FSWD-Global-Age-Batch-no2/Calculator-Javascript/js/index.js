let outputScreen = document.querySelector('#output-screen');''

const display = (value) => {
    try {
        outputScreen.value += value ;
    } catch (error) {
        alert(error.message)
    }
}


const calculate = () => {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (error) {
        alert(error.message)
    }
}

const clr = () => {
 try {
    outputScreen.value = ''
 } catch (error) {
    alert(error.message)
 }
}

const del =  () => {
    try {
        outputScreen.value = outputScreen.value.slice(0,-1);
    } catch (error) {
        
    }
}