// const createMusic = () => {
//     try {
//         const songName = document.querySelector('#song-name').value;
//         const artistName = document.querySelector('#artist-name').value;
//         const musicUrl = document.querySelector('#music-url').value;
//         const imageUrl = document.querySelector('#image-url').value;
//         const songDescription = document.querySelector('#song-description').value;
//         const newMusicObject = {
//             songName:songName,
//             artistName:artistName,
//             musicUrl:musicUrl,
//             imageUrl:imageUrl,
//             songDescription:songDescription
//         }
//         const musicArray = [];
//         const getDataFromLocalStorage = JSON.parse(localStorage.getItem('music-data'));
//         if (!!getDataFromLocalStorage) {
//             console.log('saray')
//             getDataFromLocalStorage.forEach(element => {
//                 musicArray.push(element);
//             });
//             musicArray.push(newMusicObject);
//         } else {
//             console.log('naya wala')
//             musicArray.push(newMusicObject);
//         }
//         localStorage.setItem('music-data',JSON.stringify(musicArray))
//     } catch (error) {
//         console.log(error.message)
//     }
// }



// simplified version
const createMusic = () => {
    try {
      const newMusicObject = {
        id:Math.floor(Math.random() * 9000) + 1000, // Generate a random number between 1000 and 9999
        songName: document.querySelector('#song-name').value,
        artistName: document.querySelector('#artist-name').value,
        musicUrl: document.querySelector('#music-url').value,
        imageUrl: document.querySelector('#image-url').value,
        songDescription: document.querySelector('#song-description').value,
      };
      const musicArray = JSON.parse(localStorage.getItem('music-data')) || [];
      musicArray.push(newMusicObject);
      localStorage.setItem('music-data', JSON.stringify(musicArray));
    } catch (error) {
      console.log(error.message);
    }
  };
  

  const  getAllData = () => {
    try {
        const getData = JSON.parse(localStorage.getItem('music-data'));
        const dataToShow = document.querySelector('#data-to-show');
        getData.forEach(data =>{
            dataToShow.innerHTML += `
            <div class="col">
              <div class="card" style="width: 18rem;">
                <img src="${data.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h1>${data.songName}</h1>
                  <p class="card-text">${data.songDescription}</p>
                </div>
              </div>
            </div>
            `
        })
    } catch (error) {
        console.log(error.message);
    }
  }
