import axios from 'axios'
const request=axios.create({
    baseURL:'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout:30000,
    headers: {
        'X-RapidAPI-Key': '371828caf7msh9dee98d80d26a06p1d43e9jsnebdd59a9dc58',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    
})



export function getAlbums(search="7ari"){
    const albums=request.get(`search?q=${search}`)
    .then(response=>response.data.data)
    .catch(error=>console.log(error))
    return albums
}
export function getAlbum(id){
    const album=request.get(`album/${id}`)
        .then(response=>response.data)
        .catch(error=>console.log(error))
    return album

}
export function GetFavories(){
    const albums=localStorage.getItem('favorites');
    return albums
}