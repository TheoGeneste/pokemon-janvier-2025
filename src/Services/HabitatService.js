import axios from "axios";

function fetchHabitat() {
    return axios.get("https://pokeapi.co/api/v2/pokemon-habitat/");
}

export default { fetchHabitat };