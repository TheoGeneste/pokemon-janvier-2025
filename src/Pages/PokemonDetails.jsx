import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TypeService from "../Services/TypeService";

const PokemonDetails = () => {
    // Constantes
    const {name} = useParams();
    const [pokemon, setPokemon] = useState({});

    // Fonctions / Comportements
    const fetchPokemonByName = async (name) => {
        try {
            const response = await PokemonService.fetchPokemonByName(name);
            const responseBis = await PokemonService.fetchPokemonSpeciesByName(name);
            const responseTer = await TypeService.fetchTypesByName(response.data.types[0].type.name);
            console.log({...responseTer.data,...response.data, ...responseBis.data});
            setPokemon({...responseTer.data,...response.data, ...responseBis.data});
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPokemonByName(name);
    }, [name]);
    
    // Affichage
    return <Container className="d-flex flex-column align-items-center">
        {/* Affiche le nom de mon pokemon en francais */}
        <h1>{pokemon.names && pokemon.names[4].name}</h1>
        {/* Je crée la div qui va contenir les deux autres div */}
        <div className="d-flex col-12 gap-2">
            {/* Je crée la div Gauche qui contient l'image et les stats */}
            <div id="gauche" className="col-5 d-flex flex-column align-items-center">
                {/* Affiche mon image */}
                <div id="img">
                    <img src={"https://img.pokemondb.net/artwork/"+name+".jpg"} alt={pokemon.name} />
                </div>
                {/* Affiche les Stats */}
                <div>
                    Stats
                </div>
            </div>
            {/* Je crée la div droite qui contient le reste des infos */}
            <div id="droite" className="col-5 d-flex flex-column align-items-center">
                {/* Si pokemon.flavor_text_entries existe alors j'affiche pokemon.flavor_text_entries[16].flavor_text */}
                <p id="description">{pokemon.flavor_text_entries && pokemon.flavor_text_entries[16].flavor_text }</p>
                <div id="games" className="d-flex gap-1 flex-wrap">
                    {pokemon.game_indices && pokemon.game_indices.map((game, index) => {
                        return <button className={game.version.name + " button"} key={index}>{game.version.name}</button>
                    })}
                </div>
                <div id="global-info" className="d-flex col-12 justify-content-between bg-primary mt-3 gap-2">
                    <div id="infos" className="d-flex flex-column col-5">
                        <h3>Taille : </h3>
                        <p>{pokemon.height / 10}m</p>
                        <h3>Poids : </h3>
                        <p>{pokemon.weight/10}Kg</p>
                    </div>
                    <div className="col-5 d-flex flex-column align-items-center gap-2">
                        <h3>Compétences</h3>
                        {pokemon.abilities && pokemon.abilities.map((ability, index) => {
                            return <button className="button" key={index}>{ability.ability.name}</button>
                        })}
                    </div>
                </div>
                <div id="types" className="d-flex flex-column col-12 mt-3">
                    <h3>Types</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {pokemon.types && pokemon.types.map((type, index) => {
                            return <button className={type.type.name + " button"} key={index}>{type.type.name}</button>
                        })}
                    </div>
                </div>
                <div id="faiblesses" className="d-flex flex-column col-12 mt-3">
                    <h3>Faiblesses</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {pokemon.damage_relations && pokemon.damage_relations.double_damage_from.map((type, index) => {
                            return <button className={type.name + " button"} key={index}>{type.name}</button>
                        })}
                    </div>
                </div>
                <div id="points-fort" className="d-flex flex-column col-12 mt-3">
                    <h3>Forces</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {pokemon.damage_relations && pokemon.damage_relations.double_damage_to.map((type, index) => {
                            return <button className={type.name + " button"} key={index}>{type.name}</button>
                        })}
                    </div>
                </div>
            </div> 
        </div>
    </Container>;
}
 
export default PokemonDetails;