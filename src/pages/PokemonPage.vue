<template>
  <h1 v-if="!pokemon">Loading...</h1>
  <div v-else>
    <h1>Who is this Pokémon?</h1>
    <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
    <template v-if="showAnswer">
      <h2 class="fade-in">{{message}}</h2>
      <button @click="newGame">Play again</button>
    </template>
  </div>

</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";
// console.log(getPokemonOptions());
export default {
  components: { PokemonImage, PokemonOptions },
  data() {
    return {
      pokemonArr:[],
      pokemon: null,
      showPokemon: false,
      showAnswer:false,
      message:null
    }
  },
  methods:{
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(pokemonId){
      this.showPokemon = true
      this.showAnswer = true
      this.message = pokemonId === this.pokemon.id ? `Correct, is ${this.pokemon.name.toUpperCase()}` : `Oops, was ${this.pokemon.name.toUpperCase()}`
    },
    newGame(){
      this.pokemon = null
      this.pokemonArr = []
      this.mixPokemonArray()
      this.showPokemon = false
      this.showAnswer = false
      this.message = null
    }
  },
  mounted(){
    this.mixPokemonArray()
  }

}
</script>
