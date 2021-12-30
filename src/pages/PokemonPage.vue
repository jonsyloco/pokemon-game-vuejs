<template>
  <div>
      <h1>Quien es este pokémon?</h1>
      <pokemon-picture 
        :pokemonId="4"
        :showPokemon="true"
      >
      </pokemon-picture>
      <pokemon-option></pokemon-option>
  </div>
</template>

<script>
import pokemonPicture from '../components/PokemonPicture.vue';
import PokemonOption from '../components/PokemonOption.vue';

export default {
  name: 'PokemonPage',
  components: {
    pokemonPicture,
    PokemonOption,
  }
}
</script>

<style>

</style>