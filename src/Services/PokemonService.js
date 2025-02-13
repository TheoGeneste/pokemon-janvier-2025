import axios from "axios";

function fetchPokemons(){
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=50000");
}

function fetchPokemonByName(name){
    return axios.get('https://pokeapi.co/api/v2/pokemon/'+name);
}

function fetchPokemonSpeciesByName(name){
    return axios.get('https://pokeapi.co/api/v2/pokemon-species/'+name);
}

export default {
    fetchPokemons,
    fetchPokemonByName,
    fetchPokemonSpeciesByName
}