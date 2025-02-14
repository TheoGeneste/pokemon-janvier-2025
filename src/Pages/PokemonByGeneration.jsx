import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

const PokemonByGeneration = () => {
    const {generation} = useParams();
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemonsByGeneration = async () => {
        try {
            const response = await PokemonService.fetchPokemonsByGeneration(generation);
            console.log(response.data);
            
            setPokemons(response.data.pokemon_species);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPokemonsByGeneration();
    }, [generation]);

    return <Container className="d-flex flex-column align-items-center">
        <h1 style={{textTransform : "uppercase"}}>{generation}</h1>    
        <div className="d-flex justify-content-around gap-2 flex-wrap">
            {pokemons.map((pokemon,index) => {
                return <PokemonCard key={index} pokemonCard={pokemon} />
            })}
        </div>
    </Container>;
}
 
export default PokemonByGeneration;