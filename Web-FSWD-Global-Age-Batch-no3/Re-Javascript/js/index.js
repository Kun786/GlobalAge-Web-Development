const changeColor = () => {
    try {
        let getDiv = document.querySelector('.div-1');
        getDiv.style.backgroundColor = 'purple'; 
    } catch (error) {
        alert(error.message)
    }
}