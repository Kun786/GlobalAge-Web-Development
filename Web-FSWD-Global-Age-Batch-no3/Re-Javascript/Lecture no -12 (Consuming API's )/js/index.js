const getData = async () => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
        const options = {
            method: 'GET',
        };
    
        const response = await fetch(url, options);
        const result = await response.text();
        const { abilities } = JSON.parse(result);
        console.log(abilities)
        const getRow = document.querySelector('.row');
        getRow.innerHTML = abilities.map((ability) => {
            return `
              <div class="card text-center">
                <div class="card-header">
                  <img src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png">
                </div>
                <div class="card-body">
                  <h5 class="card-title">${ability.ability.name}</h5>
                  <p class="card-text">This is Pokemon</p>
                  <button class="btn btn-outline-primary" onclick="getIndividualData('${ability.ability.url}')">More Ind</button>
                </div>
                <div class="card-footer text-muted">
                  More Information
                </div>
              </div>`;
          });
        
    } catch (error) {
        console.error(error);
    }
}

const getIndividualData = async(url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
        });
        const result = await response.text();
        console.log(JSON.parse(result))
    } catch (error) {
     console.log(error.message)
    }
}