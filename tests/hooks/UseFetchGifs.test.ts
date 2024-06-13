import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en el kook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch') ); // Render a hook within a test 
        const { images, isLoading } = result.current; // se obtiene los resultados del hook
        
        expect( images.length ).toBe(0); // 
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );  // Render a hook within a test 
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0) // se espera que sea mas de una imagen
        ); // se trabaja de manera asyncrona para esperar el resultado con las imagenes
          
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0); // se espera que el arreglo de imagenes sea mayor a cero
        expect( isLoading ).toBeFalsy(); // se espera que es isLoading sea falso

    });

});