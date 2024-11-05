import { Container, Row, Col } from "react-bootstrap";

function Contatti() {
  return (
    <Container className="mt-5" style={{ textAlign: "center" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5em", // Dimensione del font
          fontWeight: "bold",
          background: "linear-gradient(90deg, #6a11cb, #ff4b2b)", // Gradiente viola e rosa
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text", // Compatibilità per altri browser
          color: "transparent", // Rende il testo trasparente per mostrare il gradiente
          lineHeight: "1.3", // Aumenta l'altezza della linea
        }}
      >
        Contatti & Social
      </h1>

      <Row className="mt-5">
        <Col md={6}>
          <h4 style={{ color: "grey" }}>Email</h4>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a href="mailto:armando.disanto@hotmail.com">
              armando.disanto@hotmail.com
            </a>
          </p>
        </Col>
        <Col md={6}>
          <h4 style={{ color: "grey" }}>Facebook</h4>
          <p>
            <i className="fab fa-facebook"></i>{" "}
            <a
              href="https://www.facebook.com/armando.disanto1"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/armando-disanto
            </a>
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h4 style={{ color: "grey" }}>LinkedIn</h4>
          <p>
            <i className="fab fa-linkedin"></i>{" "}
            <a
              href="https://www.linkedin.com/in/armando-di-santo-06415b273"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/armando-disanto
            </a>
          </p>
        </Col>
        <Col md={6}>
          <h4 style={{ color: "grey" }}>Instagram</h4>
          <p>
            <i className="fab fa-instagram"></i>{" "}
            <a
              href="https://www.instagram.com/armando.di.santo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/armando.di.santo
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contatti;
