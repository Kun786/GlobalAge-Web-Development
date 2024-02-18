
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const submitValues = () => {
    try {
        let getValue = document.querySelector('.input').value;
        let getRadio = document.querySelector('.gender:checked').value;
        let getEmail = document.querySelector('.email').value;

        if (getValue !== "" && getRadio && validateEmail(getEmail)) {
            document.querySelector('h1').innerHTML = `Value is ${getValue}, gender is ${getRadio}, and email is ${getEmail}`;
        } else {
            alert('Please Enter All Details or Correct Email');
        }
    } catch (error) {
        console.log(error);
    }
}


// for accessing data-value from html non-formcontrols