import "../components/style/chisono.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Chisono() {
  return (
    <div className="chisono-container">
      <h1 className="chisono">Coding & Learning</h1>
      <p className="testo">
        Costruisco il mio futuro un codice alla volta!
        <br />
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
      <a
        href="https://github.com/Armando220497"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          style={{ color: "#333", marginRight: "10px" }}
        />
      </a>
      <a
        href="/CV_Armando_Di_Santo_2024.pdf"
        download
        className="btn btn-primary"
        style={{
          background: "linear-gradient(90deg, #6a11cb, #ff4b2b)",
          border: "none",
        }}
      >
        Scarica il mio Curriculum
      </a>
    </div>
  );
}

export default Chisono;
