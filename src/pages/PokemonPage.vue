<template>
  <div>
      <h1 v-if="!pokemon">Espere por favor...</h1>
      <div v-else>
        <h1>Quien es este pokémon?</h1>
        <pokemon-picture 
          :pokemonId="pokemon.id"
          :showPokemon="true"
        >
        </pokemon-picture>
        <pokemon-option :pokemons = "pokemonArr"></pokemon-option>
      </div>
  </div>
</template>

<script>
import pokemonPicture from '../components/PokemonPicture.vue';
import PokemonOption from '../components/PokemonOption.vue';
import getPokemonOptions from '../helpers/getPokemonOPtions';

export default {
  name: 'PokemonPage',
  components: {
    pokemonPicture,
    PokemonOption,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor( Math.random() * 4);
      this.pokemon = this.pokemonArr[ rndInt ];
    }

  },
  mounted() {
    this.mixPokemonArray();
  }
}
</script>

<style>

</style>