import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TypeService from "../Services/TypeService";
import GenerationService from "../Services/GenerationService";

const NavBar = () => {
    const navigate = useNavigate();
    // Crée un état type qui est un tableau vide par défaut
    const [types,setTypes] =useState([]);
    const [generations,setGenerations] =useState([]);

    // Crée une fonction fetchTypes qui va chercher les types
    const fetchTypes = async () => {
        try {
            // Appelle la fonction fetchTypes de TypeService
            const response = await TypeService.fetchTypes();
            // Met à jour l'état types avec les types récupérés
            setTypes(response.data.results);
        }catch(error) {
            console.error(error);
        }
    }

    const fetchGenerations = async () => {
        try {
            // Appelle la fonction fetchTypes de TypeService
            const response = await GenerationService.fetchGenerations();
            // Met à jour l'état types avec les types récupérés
            setGenerations(response.data.results);
        }catch(error) {
            console.error(error);
        }
    }
    // Utilise useEffect pour appeler fetchTypes une seule fois
    useEffect(() => {
        fetchTypes();
        fetchGenerations();
    }, []);

    return <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => {navigate("/")}}>Pokedex</Navbar.Brand>
                {/* <NavBar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Types" id="basic-nav-dropdown">
                            {/* .map pour traverser tout le tableau et afficher un item par element */}
                            {types.map((type, index) => {
                                return <NavDropdown.Item className="item" key={index} onClick={() => {navigate("/type/"+type.name)}}>
                                    {type.name}</NavDropdown.Item>
                            })}
                        </NavDropdown>
                        <NavDropdown title="Générations" id="basic-nav-dropdown">
                            {/* .map pour traverser tout le tableau et afficher un item par element */}
                            {generations.map((generation, index) => {
                                return <NavDropdown.Item className="item" key={index} onClick={() => {navigate("/generation/"+generation.name)}}>
                                    {generation.name}</NavDropdown.Item>
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>;
}

export default NavBar;