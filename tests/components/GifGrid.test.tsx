import React from "react";
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { typeImages, useFetchGifs } from "../../src/hooks/UseFetchGifs";


jest.mock("../../src/hooks/UseFetchGifs"); // Se requiere para hacer un mockup de todo el path

describe('pruebas en <GifGrid />', () => {

    const category = 'One Punch'

    test('debe mostrar el loading inicialmente', () => {

        // se establecen los valores del useFetchGifs
        (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />); // se obtiene el objeto de pruebas
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category));
        screen.debug()
    });

    test('debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        // se establecen los valores al mockup de useFetchGifs
        (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
            images: [
                {
                    id: 'ABC',
                    title: 'Saitama',
                    url: 'https://localhost/saitama.jpg'
                },
                {
                    id: '123',
                    title: 'Goku',
                    url: 'https://localhost/goku.jpg'
                }
            ],
            isLoading: true
        });

        render(<GifGrid category={category} />); // se obtiene el objeto de pruebas
        screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2); // se espera que hayan dos images
    });

});