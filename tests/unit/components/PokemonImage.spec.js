import { shallowMount } from "@vue/test-utils";

import PokemonImage from "@/components/PokemonImage";

describe('PokemonImage Component', () => {

    test('must be match with snapshot', () => {
        const wrapper = shallowMount(PokemonImage,{
            props:{
                pokemonId:1,
                showPokemon:false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    });
    test('must be show the hidden image and the pokemon 100', () => {
        const wrapper = shallowMount(PokemonImage,{
            props:{
                pokemonId:100,
                showPokemon:false
            }
        })
        const [img1,img2] = wrapper.findAll('img')
        expect(img1.exists()).toBeTruthy()
        expect(img2).toBeFalsy()
        expect(img1.classes('hidden-pokemon')).toBeTruthy()
        expect(img1.attributes().src).toContain('100.svg')

        
    });
    test('must be show the pokemon image if showPokemon is true', () => {
        const wrapper = shallowMount(PokemonImage,{
            props:{
                pokemonId:100,
                showPokemon:true
            }
        })
        const img1 = wrapper.find('img')
        expect(img1.exists()).toBeTruthy()

        expect(img1.classes('hidden-pokemon')).toBeFalsy()
        expect(img1.classes('fade-in')).toBeTruthy()
    });
});