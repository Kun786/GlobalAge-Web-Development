const signup = (formData) => {
    try {
        console.log(formData);
        const name = document.querySelector('.name').value;
        const email = document.querySelector('.email').value;
        const lastName = document.querySelector('.last-name').value;
        const address = document.querySelector('.address').value;
        const dob = document.querySelector('.dob').value;
        let userObject = {
            name,
            email,
            lastName,
            address,
            dob
        }
        localStorage.setItem('user', JSON.stringify(userObject));
        // alertMessage = 'Registered Successfully';
        // alertContainer.innerHTML = alertMessage;
        // // alertContainer.classList.remove('alert-danger');
        //     alertContainer.classList.add('alert-primary');
        //     alertContainer.style.display = 'block';
        showAlert('Registered Successfully', 'alert-primary');
        window.location.href = 'user-dashboard.html';

    } catch (error) {
        alertMessage = error.message;
        // alertContainer.innerHTML = alertMessage;
        // // alertContainer.classList.remove('alert-danger');
        //     alertContainer.classList.add('alert-danger');
        //     alertContainer.style.display = 'block';
        showAlert(error.message, 'alert-danger');
    }
}


function showAlert(message, className) {
    let alertContainer = document.querySelector('.message');
    alertContainer.innerHTML = message;
    // alertContainer.classList.remove('alert-primary', 'alert-danger');
    alertContainer.classList.add(className);
    alertContainer.style.display = 'block';
    setTimeout(() => {
        alertContainer.style.display = 'none';
    }, 3000); // Hide after 30 seconds
}


// Accessing the code From event Object
// const signup = (event) => {
//     try {
//         event.preventDefault(); // Prevent the form from submitting
        
//         const formData = new FormData(event.target); // Get form data using FormData
        
//         const name = formData.get('name');
//         const email = formData.get('email');
//         const lastName = formData.get('last-name');
//         const address = formData.get('address');
//         const dob = formData.get('dob');
        
//         let userObject = {
//             name,
//             email,
//             lastName,
//             address,
//             dob
//         };
        
//         console.log(userObject);
//     } catch (error) {
//         alert(error.message);
//     }
// }
