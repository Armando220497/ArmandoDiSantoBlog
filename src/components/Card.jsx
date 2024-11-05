import "./style/card.css";
// Importa il componente FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importa l'icona specifica di Font Awesome (ad esempio l'icona di LinkedIn)
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa anche JS di Bootstrap per la funzionalità dei componenti come collapse

function Card() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="card-img-custom"
            src="/img/immagineDiProfilo.jpeg"
            alt="example"
            style={{ width: "18rem", height: "18rem" }}
          />
        </div>
        <div className="flip-card-back">
          <h1 className="mt-5">
            Armando <br /> Di Santo{" "}
          </h1>
          <h4>Junior Web Developer</h4>
          <a
            href="https://www.linkedin.com/in/armando-di-santo-06415b273"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "white" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
