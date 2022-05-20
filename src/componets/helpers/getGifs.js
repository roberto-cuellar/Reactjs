export const getGifs = async(category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=1teajJA9o0JEmd0P7uspSPmdmJrBwsCA&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // El signo de interrogación pregunta si existe esa propiedad, y si existe entonces hace el resto
        }
    })
    
    return gifs;

}