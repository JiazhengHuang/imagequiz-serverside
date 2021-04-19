import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navbars() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/login">Log In</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/quiz">Quiz</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbars;
