const chnageHeadingColor = () => {
    try {
        const heading = document.querySelector('.heading');
        heading.style.color = 'red';
    } catch (error) {
        alert(error.message);
    }
}

