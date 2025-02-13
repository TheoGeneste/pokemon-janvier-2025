import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => {navigate("/")}}>Pokedex</Navbar.Brand> 
            </Container>
        </Navbar>
    </>;
}

export default NavBar;