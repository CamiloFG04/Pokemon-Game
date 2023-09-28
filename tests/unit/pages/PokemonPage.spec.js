import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    });

    test('must call mixPokemonArray when mounting', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods,'mixPokemonArray')
        shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled();
    });

    test('must be match with snapshot when pokemons are loaded', () => {
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer:false,
                    message:''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('must be show PokemonImage and PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer:false,
                    message:''
                }
            }
        })
        const image = wrapper.getComponent({name:'PokemonImage'});
        const options = wrapper.getComponent({name:'PokemonOptions'});
        expect(image).toBeTruthy()
        expect(options).toBeTruthy()
        expect(image.attributes('pokemonid')).toBe("1")
        expect(options.attributes('pokemons')).toBeTruthy()
    });

    test('tests with checkAnswer', async() => {
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer:false,
                    message:''
                }
            }
        })
        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correct, is ${pokemons[0].name.toUpperCase()}`)
        expect(wrapper.vm.showPokemon).toBeTruthy()

        await wrapper.vm.checkAnswer(10)

        expect(wrapper.vm.message).toBe(`Oops, was ${pokemons[0].name.toUpperCase()}`)


    });
});