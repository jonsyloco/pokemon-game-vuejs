import pokemonApi from "../api/pokemonApi";

const getPokemons = () =>{
    const pokemonsArr = Array.from( Array(650));
    return pokemonsArr.map((data, index) => {
        return index + 1;
    })
}

const getPokemonOptions = async () => {
    //mesclamos los pokemon mediante la funcion sort de ordenamiento
    const mixedPokemon = getPokemons().sort( () => {
        return Math.random() - 0.5;
    });
    const pokemonsRespuesta =  await getPokemonNames(mixedPokemon.slice(0,4)); // solo obtenemos los primeros 4 pokemons
     return pokemonsRespuesta;
}

//const getPokemonNames = async(pokemons = []) => { forma nommal
const getPokemonNames = async([a,b,c,d] = []) => { // forma con des estruturacion

    //forma antigua
    /* const {data} = await pokemonApi.get(`/1`)
    const {name, id} = data;
    console.log(name, id); */

    //forma de envio de peticiones simultaneas
    const promisesArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ];
    //arroja un arreglo de respuestas
    const resps = await Promise.all( promisesArr )
    //console.log(resps);
    const respA = resps[0]
    const respB = resps[1]
    const respC = resps[2]
    const respD = resps[3]

    return [
        {name: respA.data.name, id: respA.data.id},
        {name: respB.data.name, id: respB.data.id},
        {name: respC.data.name, id: respC.data.id},
        {name: respD.data.name, id: respD.data.id},
    ];
}

export default getPokemonOptions