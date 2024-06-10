import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/UseFetchGifs";

export const GifGrid = ({ category }: GifGridpProps) => {

    // Se realiza el llamada al custom hook useFetchGifs
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                // if corto con una sola condición (And logico)
                // Si es true, muestra el cargando
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    // Se recibe un array de imagenes
                    // Se realiza la destructuracion del objeto obteniendo el id y title
                    // images.map(({id, title}) => (
                    //     // <li key={id}>{title}</li>
                    //     //<GifItem key={id}/>
                    // ))

                    images.map(({ id, title, url }) => (
                        <GifItem
                            key={id}
                            title={title}
                            url={url}
                        />
                    ))
                }
            </div>
        </>
    )
}

type GifGridpProps = {
    category: string
}
