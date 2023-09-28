import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions";

describe('Pokemon Helpers', () => {
    test('must return an array of numbers', () => {
        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[649]).toBe(650)
    });

    test('must be return an array of 4 elements with pokemons name', async () => {
        const pokemons = await getPokemonNames([1, 2, 3, 4])
        // or toMatchObject
        expect(pokemons).toStrictEqual([
            {
                id: 1,
                name: 'bulbasaur'
            },
            {
                id: 2,
                name: "ivysaur"
            },
            {
                id: 3,
                name: "venusaur"
            },
            {
                id: 4,
                name: "charmander"
            }
        ])
    });

    test('getPokemonOptions must be return a mixed array', async () => {
        const pokemons = await getPokemonOptions();
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            }
        ])
    });
});