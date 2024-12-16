import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Aggiungi PropTypes
import "./style/navbar.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomNavbar({ darkMode, toggleDarkMode }) {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
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
            src="/img/nav-icon.png"
            alt="Menu"
            className="custom-toggle-icon"
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNavAltMarkup" className="custom-collapse">
          <Nav className="navbar-nav">
            <Nav.Link
              as={Link}
              to="/"
              className="active-nav"
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

        {/* Toggle Dark Mode */}
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          onClick={toggleDarkMode}
          className="dark-mode-icon"
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            marginLeft: "1rem",
          }}
        />
      </Container>
    </Navbar>
  );
}

// Aggiungi la validazione delle proprietà
CustomNavbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default CustomNavbar;
