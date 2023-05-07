function submitMyValues(){
   let inputName =  document.querySelector('.name').value;
   let inputAge =  document.querySelector('.age').value;
   let inputpassword =  document.querySelector('.passwrod').value;
   let inputMessage =  document.querySelector('.message').value;
   let inputCheckBoxValue =  document.querySelector('.checkBoxValue').value;

   let userObject = {
        Name:inputName,
        Age:inputAge,
        Password:inputpassword,
        Message:inputMessage,
        CheckBoxValue:inputCheckBoxValue
   }

   let showMyResult = document.querySelector('.showMyResult');
//    showMyResult.innerHTML = `
//    <p>Name:${userObject.Name}</p>
//    <p>Age:${userObject.Age}</p>
//    <p>Password:${userObject.Password}</p>
//    <p>Message:${userObject.Message}</p>
//    <p>CheckBoxValue:${userObject.CheckBoxValue}</p>
//    `

showMyResult.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body{
  font-family: 'Montserrat', sans-serif;
  background-color: #F5F5F7;
  height: 100vh;
  display: grid;
  place-items:center;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
.window{
  background-color: #fff;
  width: 80vw;
  height: 80vh;
  border-radius:1rem;
  overflow:hidden;
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
}
.top-bar{
  padding: 0.75rem;
  background-color: #ddd;
  display: flex;
  gap: 0.5rem;
}
.top-bar span{
  background-color: black;
  width: 15px;
  height: 15px;
  border-radius:50%;
  cursor:pointer;
}
.top-bar span:nth-child(1){
  background-color: #F96058;
}
.top-bar span:nth-child(2){
  background-color: #FEC009;
}
.top-bar span:nth-child(3){
  background-color: #1DC937;
}
.content{
  height: 100%;
  display: grid;
  place-items:center;
}
</style>
</head>
<body>
<div class="window">
<div class="top-bar">
  <span></span>
  <span></span>
  <span></span>
</div>
<div class="content">
  <h1>Welcome To My Space !</h1>
</div>
</div>
</body>
</html>
`
}

