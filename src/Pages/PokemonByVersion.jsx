import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

const PokemonByVersion = () => {
    const { version } = useParams();
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemonByVersion = async () => {
        try {
            // Appelle la fonction fetchPokemonByVersion de PokemonService pour recuperer les informations de la version
            const response = await PokemonService.fetchPokemonByVersion(version);
            // Appelle la fonction fetchPokemonByVersionGroupe de PokemonService pour recuperer les informations du groupe de la version
            const responseBis = await PokemonService.fetchPokemonByVersionGroupe(response.data.version_group.name);
            // Appelle la fonction fetchPokemonsByGeneration de PokemonService pour recuperer les pokemons de la generation
            const responseTer = await PokemonService.fetchPokemonsByGeneration(responseBis.data.generation.name);
            setPokemons(responseTer.data.pokemon_species);
            
        }catch(error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchPokemonByVersion();
    }, []);

    return <Container className="d-flex flex-column align-items-center">
        <h1 style={{textTransform : "capitalize"}}>{version}</h1>
        <div className="d-flex flex-wrap justify-content-around gap-2">
            {pokemons.map((pokemon,index) => {
                return <PokemonCard key={index} pokemonCard={pokemon} />
            })}
        </div>
    </Container>;
}
 
export default PokemonByVersion;