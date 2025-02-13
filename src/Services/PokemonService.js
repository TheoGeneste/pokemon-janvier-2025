import axios from "axios";

function fetchPokemons(){
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=50000");
}

export default {
    fetchPokemons
}