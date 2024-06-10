
import { getGifs } from '../../src/services/GifGridService'

describe('pruebas en getGifs()', () => {

    test('debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);

        // se espera que el objeto ubicado en la posición cero del array tenga esas misma caracteristicas
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
});