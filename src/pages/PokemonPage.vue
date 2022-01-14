<template>
  <div>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      <h1>Quien es este pokémon?</h1>
      <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon">
      </pokemon-picture>
      <pokemon-option
        :pokemons="pokemonArr"
        @selection-pokemon="chekAnswer($event)"
      ></pokemon-option>

      <h2>{{ message }}</h2>
      <button>Nuevo juego</button>
    </div>
  </div>
</template>

<script>
import pokemonPicture from "../components/PokemonPicture.vue";
import PokemonOption from "../components/PokemonOption.vue";
import getPokemonOptions from "../helpers/getPokemonOPtions";

export default {
  name: "PokemonPage",
  components: {
    pokemonPicture,
    PokemonOption,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    chekAnswer(pokemonId) {
      if (this.pokemon.id == pokemonId) {
        this.showPokemon = true;
        this.message = `Correcto ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>