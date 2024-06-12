import React from "react";
import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('pruebas en <AddCategory />', () => {

    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        const input = (screen.getByRole('textbox') as HTMLInputElement) // se obtiene del dom el input del formulario

        fireEvent.input(input, { target: { value: 'Saitama' } }); // se dispara el evento input colocando el valor saitana en el input
        expect(input.value).toBe('Saitama') // se espera que el input tenga el valor Saitana
        // screen.debug()
    });

    test('debe llamar el onNewCategory si el input tiene un valor ', () => {
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn(); // esto es una funcion mock, quiere decir que es para pruebas
        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = (screen.getByRole('textbox') as HTMLInputElement) // se obtiene del dom el input del formulario
        const form = screen.getByRole('form'); // se obtiene el formulario de dom

        fireEvent.input(input, { target: { value: inputValue } }); // se dispara el evento input colocando el valor saitana en el input
        fireEvent.submit(form); // dispara el submit del formulario
        // screen.debug();
        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalled(); // se espera que la función haya sido llamada desde el componente
        expect(onNewCategory).toHaveBeenCalledTimes(1); // se espera que la funcion haya sido llamada 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // se espera que la funcion haya sido llamada con el valor de la caja de texto
    });

    test('no debe llamar el onNewCategory si el input esta vacio ', () => {


        const onNewCategory = jest.fn(); // esto es una funcion mock, quiere decir que es para pruebas
        render(<AddCategory onNewCategory={onNewCategory} />)

        const form = screen.getByRole('form'); // se obtiene el formulario de dom

        fireEvent.submit(form); // dispara el submit del formulario
        screen.debug();

        expect(onNewCategory).toHaveBeenCalledTimes(0); // se espera que la funcion no haya sido llamada
        expect(onNewCategory).not.toHaveBeenCalled(); // se espera que la funcion no haya sido llamada
    });

});