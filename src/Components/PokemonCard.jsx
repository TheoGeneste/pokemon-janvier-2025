import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({pokemonCard}) => {
    const navigate = useNavigate();

    return <>
        <Card style={{ width: '18rem' }} className="text-center d-flex flex-column justify-content-between align-items-center" 
        onClick={() => {navigate("/pokemon/"+pokemonCard.name)}}>
            <Card.Img variant="top"src={"https://img.pokemondb.net/artwork/"+pokemonCard.name+".jpg"} height={250} style={{objectFit: "contain"}}/>
            <Card.Body className="d-flex flex-column justify-content-end">
                <Card.Title>{pokemonCard.name}</Card.Title>
            </Card.Body>
        </Card>
    </>;
}
 
export default PokemonCard;