const getData = async () => {
    try {
        const getApiData = await fetch("https://dog.ceo/api/breeds/image/random", {
            method: "GET" // This is the default, so you can omit it.
        });
        const {message, status} = await getApiData.json();
        localStorage.setItem('data', JSON.stringify({url:message, status:status}));
        const accessDataContainer = document.querySelector('.content');
        accessDataContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${message}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h1>${status}</h1>
  </div>
</div>
        `
    } catch (error) {
        console.error(error.message);
    }
}

const persistData = () => {
    try {
      const {url, status}   = JSON.parse(localStorage.getItem('data'));	
      const accessDataContainer = document.querySelector('.content');
        accessDataContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h1>${status}</h1>
  </div>
</div>
        `
    } catch (error) {
        console.error(error.message);
    }
}

const deleteData = () =>{
    try {
        localStorage.removeItem('data');
        const accessDataContainer = document.querySelector('.content');
        accessDataContainer.innerHTML = ``  
    } catch (error) {
        console.error(error.message);
    }
}
