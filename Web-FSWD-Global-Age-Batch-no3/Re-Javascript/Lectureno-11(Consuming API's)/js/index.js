const getData = async () => {
    try {
        const getApiData = await fetch("https://api.artic.edu/api/v1/artworks");
        console.log(getApiData)
    } catch (error) {
        console.log(error.message)
    }
}