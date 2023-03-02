import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch','Dragon Ball']);

    const onAddCategory = (category: string) => {

        if(categories.includes(category)) return; // Se valida que la categoria no se encuentre en el array

        setCategories([category, ...categories]); // se realiza la deestructuración de ...categories para mantener los valores iniciales e insertar una nueva categoría
        //setCategories(categoria => [...categories, newCategory]); // Otra forma de agregar un valor a un arreglo
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={(value: string) => onAddCategory(value)} // onNewCategory se envia como una propiedad de tipo funcion al componente hijo (ver componente hijo)
            /> 
            {/* Listo de Gif */}
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}
