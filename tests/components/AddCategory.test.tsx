import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('pruebas en <AddCategory />', () => {

    const onNewCategory = (category: string) => {

    }


    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        const input = (screen.getByRole('textbox') as HTMLInputElement) // se obtiene del dom el input del formulario

        fireEvent.input(input, {target: {value: 'Saitana'}}); // se dispara el evento input colocando el valor saitana en el input
        expect(input.value).toBe('Saitana') // se espera que el input tenga el valor Saitana
        // screen.debug()
    })

});