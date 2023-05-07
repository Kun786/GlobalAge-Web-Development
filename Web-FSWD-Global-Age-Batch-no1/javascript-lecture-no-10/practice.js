let getValues = (rawData) => {
    try {
        const FormValues = new FormData(rawData.target);
        const emailValue = FormValues.get('email');
        const passwordValue = FormValues.get('password');
        const getDiv = document.querySelector('.showForm');
        getDiv.innerHTML=`
        <h1>Email; ${emailValue}</h1>
        <h1>Password; ${passwordValue}</h1>
        `
    } catch (error) {
        console.log(error.message)
    }
}
