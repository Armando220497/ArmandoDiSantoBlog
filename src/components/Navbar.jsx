import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style/navbar.css";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false); // Chiude la navbar dopo aver cliccato un link
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="custom-navbar"
    >
      <Container fluid>
        <Navbar.Brand
          className="title-site"
          as={Link}
          to="/"
          onClick={handleNavLinkClick}
        >
          armandodisanto.it
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNavAltMarkup"
          onClick={() => setExpanded(!expanded)}
        >
          <img
            src="/img/nav-icon.png" // Percorso dell'icona nella cartella public
            alt="Menu"
            className="custom-toggle-icon"
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <Nav.Link
              as={Link}
              to="/"
              className="active-nav"
              aria-current="page"
              onClick={handleNavLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              className="active-nav"
              onClick={handleNavLinkClick}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/progetti"
              className="active-nav"
              onClick={handleNavLinkClick}
            >
              Progetti
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contatti"
              className="active-nav"
              onClick={handleNavLinkClick}
            >
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
