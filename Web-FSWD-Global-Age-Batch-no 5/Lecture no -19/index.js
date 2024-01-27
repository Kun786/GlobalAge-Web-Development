const changeColor = () => {
    try {
        const number1 = parseInt(window.prompt('Enter 1st Number'));
        const number2 = parseInt(window.prompt('Enter 2nd Number'));
        const result = number1 + number2;
        const getHtmlElement = document.querySelector('.my-heading');
        getHtmlElement.style.cssText = `
    background: blue; 
    color: white; 
    font-weight: bold;
    `;
        getHtmlElement.innerHTML = `
    <ul>
    <li>Item ${result}</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
    `;
    } catch (error) {
        alert(error.message)
    }
}

