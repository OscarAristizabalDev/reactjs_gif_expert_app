import { ChangeEvent, useState } from "react"

export const AddCategory = ({onNewCategory}: any) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target} : any) => {
        setInputValue(target.value);
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //setCategories((categories: any) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim()); // una vez se invoca la función esta notifica al componente padre y se ejecuta la accion onAddCategory del componente padre
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input 
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={(event) => onInputChange(event)}
                />
            </form>
        </>
    )
}
