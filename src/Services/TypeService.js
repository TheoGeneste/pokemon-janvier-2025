import axios from "axios";

function fetchTypesByName(type){
    return axios.get("https://pokeapi.co/api/v2/type/"+type);
}

export default {
    fetchTypesByName
}