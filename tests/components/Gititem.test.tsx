import React from "react";
import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components/Gifitem';

describe('pruebas en <Gifitem />', () => {

    const title = 'saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />); // render retorna diferentes metodos para trabajar con el DOM
        expect(container).toMatchSnapshot(); // crea un shapshot para en las siguientes pruebas validar que ha cambiado en el componente
    });

    test('debe mostrar la image con el URL indicado', () => {
        const { container } = render(<GifItem title={title} url={url} />); // render retorna diferentes metodos para trabajar con el DOM
        // screen.debug();
        // console.log((screen.getByRole('img') as HTMLImageElement).alt)
        const { src, alt }: HTMLImageElement = screen.getByRole('img');
        expect(src).toBe(url); // se valida que el src sea el mismo que la url
    });

    test('debe mostrar el titulo en el componente', () => {
        const { container } = render(<GifItem title={title} url={url} />); // render retorna diferentes metodos para trabajar con el DOM
        expect(screen.getByText(title)).toBeTruthy(); // se valida existar un titulo como texto en el dom
    });

});