import axios from "axios";

function fetchGenerations(){
    return axios.get("https://pokeapi.co/api/v2/generation");
}

export default {
    fetchGenerations
}