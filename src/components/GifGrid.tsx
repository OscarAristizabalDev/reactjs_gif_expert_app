import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/UseFetchGifs";

export const GifGrid = ({ category }: GifGridpProps) => {

    // Se realiza el llamada al custom hook useFetchGifs
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    // Se recibe un array de imagenes
                    // Se realiza la destructuracion del objeto obteniendo el id y title
                    // images.map(({id, title}) => (
                    //     // <li key={id}>{title}</li>
                    //     //<GifItem key={id}/>
                    // ))

                    images.map((image) => (
                        // <li key={id}>{title}</li>
                        <GifItem 
                            key={image['id']} 
                            // Se envian todas las propiedades del objeto image
                            // Puede ser util cuando el objeto tenga muchas propiedades
                            {...(image as object)}/>
                    ))
                }
            </div>
        </>
    )
}

type GifGridpProps = {
    category: string
}
