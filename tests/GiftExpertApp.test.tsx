import React from "react";
import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('pruebas en <GifExpertApp />', () => {

    test('debe agregar una nueva categoria que no este incluida en categorias', () => {
        render(<GifExpertApp />)
        const input = (screen.getByRole('textbox') as HTMLInputElement) // se obtiene del dom el input del formulario
        const form = screen.getByRole('form'); // se obtiene el formulario de dom
        
        
        fireEvent.input(input, { target: { value: 'One Punch' } }); // se dispara el evento input colocando el valor saitana en el input
        fireEvent.submit(form); // dispara el submit del formulario
        screen.debug()

        expect(screen.getByText('GifExpertApp')).toBeTruthy() // espera que exista un elemento con GifExpertApp
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2)
    })

});