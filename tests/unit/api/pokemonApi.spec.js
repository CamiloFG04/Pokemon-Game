import pokemonApi from "@/api/pokemonApi";

describe('Pokemon API', () => {
    test('Axios must be configurated with the pokemon api', () => {
        const {baseURL} = pokemonApi.defaults
        console.log(baseURL)

        expect(baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    });
});