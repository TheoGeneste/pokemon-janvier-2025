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

// Crée une fonction fetchPokemonsByType qui prend un paramètre type
function fetchPokemonsByType(type){
    // Appelle axios.get avec l'URL de l'API pour récupérer les pokemons par type
    return axios.get("https://pokeapi.co/api/v2/type/"+type);
}

export default {
    fetchPokemons,
    fetchPokemonByName,
    fetchPokemonSpeciesByName,
    fetchPokemonsByType
}