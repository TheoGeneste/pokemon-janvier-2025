import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

const PokemonByType = () => {
    // Récupère le paramètre type de l'URL
    const { type } = useParams();
    // Crée un état pokemons qui est un tableau vide par défaut
    const [pokemons, setPokemons] = useState([]);

    // Crée une fonction fetchPokemonsByType qui va chercher les pokemons par type
    const fetchPokemonsByType = async () => {
        try {
            // Appelle la fonction fetchPokemonsByType de PokemonService
            const response = await PokemonService.fetchPokemonsByType(type);
            // Met à jour l'état pokemons avec les pokemons récupérés
            setPokemons(response.data.pokemon);
        } catch (error) {
            console.error(error);
        }
    };

    // Utilise useEffect pour appeler fetchPokemonsByType une seule fois
    useEffect(() => {
        fetchPokemonsByType();
    }, [type]);

    
    return <Container className="d-flex flex-column align-items-center">
        <h1>{type}</h1>
        <div className="d-flex justify-content-around gap-2 flex-wrap">
            {pokemons.map((pokemon,index) => {
                return <PokemonCard key={index} pokemonCard={pokemon.pokemon} />
            })}
        </div>
    </Container>;
}
 
export default PokemonByType;