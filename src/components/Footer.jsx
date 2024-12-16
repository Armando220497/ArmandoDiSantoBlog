import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Armando Di Santo</p>
        <ul className="list-inline">
          <li className="list-inline-item mx-2">
            <a
              href="mailto:armando.di.santo@hotmail.com"
              aria-label="Invia un'email ad Armando Di Santo"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a
              href="https://www.linkedin.com/in/armando-di-santo-06415b273"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profilo LinkedIn di Armando Di Santo"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a
              href="https://github.com/Armando220497"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profilo GitHub di Armando Di Santo"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} Armando Di Santo. Tutti i diritti
          riservati.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
