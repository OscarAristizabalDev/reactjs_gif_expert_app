import 'whatwg-fetch' // this package resolve the problem using fetch with jest

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wzIlWsp5NROjCJPvcGnaTf8Y5PLTzLic&q=${category}&limit=10`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map((image: any) => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))

    return gifs;
}
