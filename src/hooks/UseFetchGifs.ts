import { useEffect, useState } from "react";
import { getGifs } from "../services/GifGridService";

export type typeImages = {
    id: string,
    title: string,
    url: string
}
// Un custom hook es simplemente una función que se podría reutilizar en diferentes componentes DRY (Don´t repeat your self)
// En este caso es una función que retorna las images y la variable isLoading
export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState<typeImages[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImage = await getGifs(category);
        setImages(newImage);
        setIsLoading(false)
    }

    // useEffect permite crear comportamientos una vez se ejecute algo
    // En este ejemplo una vez se haga la consulta del gif con los [] evitamos que el componente se recargue nuevamente y haga N peticiones por cada categoria que tenga
    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
