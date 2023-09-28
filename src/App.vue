<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" class="fade-in">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <PokenonPage/>
</template>

<script>
import PokenonPage from './pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    PokenonPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
