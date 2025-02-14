import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

const PokemonByHabitat = () => {
    const { habitat } = useParams();
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemonByHabitat = async () => {
        try {
            const response = await PokemonService.fetchPokemonByHabitat(habitat);
            setPokemons(response.data.pokemon_species);
        }catch(error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchPokemonByHabitat();
    }, [habitat]);

    return <Container className="d-flex flex-column align-items-center">
        <h1 style={{textTransform : "capitalize"}}>{habitat}</h1>
        <div className="d-flex flex-wrap justify-content-around gap-2">
            {pokemons.map((pokemon, index) => {
                return <PokemonCard key={index} pokemonCard={pokemon} />
            })}
        </div>
    </Container>;
}
 
export default PokemonByHabitat;