import PropTypes from "prop-types"; // Importa PropTypes
import { Container, Row, Col } from "react-bootstrap";
import "../components/style/contatti.css";

function Contatti({ darkMode }) {
  return (
    <>
      <div className="decorazione">
        {/* Usa il prop `darkMode` per decidere quale immagine mostrare */}
        <img
          src={darkMode ? "/img/aereo-bianco.png" : "/img/aereo-nero.png"}
          alt="Decorazione"
          className="small-img"
        />
      </div>

      <Container className="contatti-container mt-5">
        <h1 className="contatti-title">Contatti & Social</h1>

        <Row className="mt-5">
          <Col md={6} className="contatti-section">
            <h4 className="contatti-label">Email</h4>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a
                href="mailto:armando.disanto@hotmail.com"
                className="contatti-link"
              >
                armando.disanto@hotmail.com
              </a>
            </p>
          </Col>
          <Col md={6} className="contatti-section">
            <h4 className="contatti-label">Facebook</h4>
            <p>
              <i className="fab fa-facebook"></i>{" "}
              <a
                href="https://www.facebook.com/armando.disanto1"
                target="_blank"
                rel="noopener noreferrer"
                className="contatti-link"
              >
                facebook.com/armando-disanto
              </a>
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6} className="contatti-section">
            <h4 className="contatti-label">LinkedIn</h4>
            <p>
              <i className="fab fa-linkedin"></i>{" "}
              <a
                href="https://www.linkedin.com/in/armando-di-santo-06415b273"
                target="_blank"
                rel="noopener noreferrer"
                className="contatti-link"
              >
                linkedin.com/armando-disanto
              </a>
            </p>
          </Col>
          <Col md={6} className="contatti-section">
            <h4 className="contatti-label">Instagram</h4>
            <p>
              <i className="fab fa-instagram"></i>{" "}
              <a
                href="https://www.instagram.com/armando.di.santo/"
                target="_blank"
                rel="noopener noreferrer"
                className="contatti-link"
              >
                instagram.com/armando.di.santo
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// Aggiungi la validazione delle props
Contatti.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Contatti;
