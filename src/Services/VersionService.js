import axios from "axios";

function fetchVersion() {
    return axios.get("https://pokeapi.co/api/v2/version");
}

export default { fetchVersion };
