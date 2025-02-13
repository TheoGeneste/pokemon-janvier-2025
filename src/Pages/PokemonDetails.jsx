import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";

const PokemonDetails = () => {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState({});

    const fetchPokemonByName = async (name) => {
        try {
            const response = await PokemonService.fetchPokemonByName(name);
            const responseBis = await PokemonService.fetchPokemonSpeciesByName(name);
            console.log({...response.data, ...responseBis.data});
            setPokemon({...response.data, ...responseBis.data});
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPokemonByName(name);
    }, [name]);

    return <>
        <h1>{pokemon.names && pokemon.names[4].name}</h1>
    </>;
}
 
export default PokemonDetails;