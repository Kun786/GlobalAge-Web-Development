const loadData = () => {
    try {
        const getData = JSON.parse(localStorage.getItem('user'));
        console.log(getData);
    } catch (error) {
        alert(error.message);
    }
}