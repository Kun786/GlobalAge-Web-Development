const submitValues = () => {
    try {
        let getValue = document.querySelector('.input').value;
        let getRadio = document.querySelector('.gender:checked').value
        if(getValue !== "" && getRadio){
            document.querySelector('h1').innerHTML = `Value is ${getValue} and color is`
        }else{
            alert('Please Enter All Details')
        }
        
    } catch (error) {
        console.log(error)
    }
}