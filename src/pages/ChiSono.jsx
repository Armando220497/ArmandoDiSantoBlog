import "../components/style/chisono.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Chisono() {
  return (
    <div className="chisono-container">
      <h1 className="chisono">Coding & Learning</h1>
      <p className="testo">
        Costruisco il mio futuro un codice alla volta,
        <br />
        Junior Developer in crescita
      </p>
      <a
        href="https://www.linkedin.com/in/armando-di-santo-06415b273"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          style={{ color: "#3D39E1", marginRight: "10px" }}
        />
      </a>
    </div>
  );
}

export default Chisono;
