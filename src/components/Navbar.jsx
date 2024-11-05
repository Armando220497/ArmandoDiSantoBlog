import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link da react-router-dom
import "./style/navbar.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" style={{}}>
      <Container fluid>
        <Navbar.Brand className="title-site" as={Link} to="/">
          armandodisanto.it
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="/" className="active" aria-current="page">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contatti" className="active">
              Contatti
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="active">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
