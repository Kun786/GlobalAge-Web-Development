const loadData = () => {
    try {
        const getUl = document.querySelector('.myObjects');
        console.log(getUl)
        const fruits = [
            {
                name: "Toyota",
                imageUrl: "https://global.toyota/pages/models/images/alphard/alphard_w610_02.jpg"
            },
            {
                name: "Honda",
                imageUrl: "https://honda.com.pk/images/landingimages/images/city/city1.2.jpg"
            },
            {
                name: "hyundai",
                imageUrl: "https://s7d1.scene7.com/is/image/hyundai/2022-elantra-hev-ltd-ceramic-white-centered-hero:Browse?fmt=webp-alpha"
            }
        ]

        for (let i = 0; i < fruits.length; i++) {
            let div = `
            <div class="col" >
            <div class="card" style="width: 18rem;">
        <img src="${fruits[i].imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${fruits[i].name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
            </div>
    `
            getUl.innerHTML += div;
        }
    } catch (error) {
        console.log(error.message);
    }
}