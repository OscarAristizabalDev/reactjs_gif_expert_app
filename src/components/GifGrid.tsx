import { useEffect } from "react"
import { getGifs } from "../services/GifGridService"

export const GifGrid = ({ category }: GifGridpProps) => {

    // useEffect permite crear comportamientos una vez se ejecute algo
    // En este ejemplo una vez se haga la consulta del gif con los [] evitamos que el componente se recargue nuevamente y haga N peticiones por cada categoria que tenga
    useEffect( () => {
        getGifs(category);
    }, [])

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}

type GifGridpProps = {
    category: string
}
