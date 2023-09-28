import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonOptions Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions,{
            props:{
                pokemons: pokemons
            }
        })
    });

    test('must be match with snapshot', () => {
        // toMatchInLineSnapshot
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('must be show the 4 options correctly', () => {
        const liTags = wrapper.findAll('li');
        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe('BULBASAUR')
        expect(liTags[1].text()).toBe('IVYSAUR')
        expect(liTags[2].text()).toBe('VENUSAUR')
        expect(liTags[3].text()).toBe('CHARMANDER')
    });

    test('must emit "selection" with its respective parameters when clicking', () => {
        const [li1,li2,li3,li4] = wrapper.findAll('li')
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[1]).toEqual([2])
        expect(wrapper.emitted('selection')[2]).toEqual([3])
        expect(wrapper.emitted('selection')[3]).toEqual([4])
    });
});