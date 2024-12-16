import "bootstrap/dist/css/bootstrap.min.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Esperienze() {
  return (
    <section>
      <h2 className="title-style mb-4">Esperienze</h2>
      <p className="testo mb-4">
        Ho avuto l&apos;opportunità di sviluppare diversi progetti personali e
        professionali, applicando le tecnologie che studio per perfezionare le
        mie competenze nello sviluppo front-end e back-end.
      </p>
      <ul className="list-unstyled testo">
        <li className="mb-3">
          <strong>Portfolio personale:</strong>{" "}
          <a
            href="https://github.com/Armando220497"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            Guarda i miei progetti su GitHub &nbsp;
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="mb-3">
          <strong>Presto.it:</strong> Sviluppo di un{" "}
          <a
            href="https://presto-armando-disanto.it/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            marketplace online
          </a>{" "}
          con Laravel. Ho implementato funzionalità come la registrazione
          utenti, la gestione degli annunci con immagini, e una dashboard
          amministrativa per il controllo degli annunci.
        </li>
        <li className="mb-3">
          <strong>Blog Personale:</strong> Creazione di un{" "}
          <a
            href="https://armandodisanto.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            blog con React e Vite
          </a>
          , includendo una dark mode per migliorare l&apos;esperienza utente e
          una navigazione fluida su dispositivi mobili.
        </li>
        <li className="mb-3">
          <strong>Vetrina Bar:</strong> Realizzazione di un{" "}
          <a
            href="https://great-vibess.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            sito di presentazione
          </a>{" "}
          per un&apos;attività con React e Vite. Ho sviluppato sezioni
          personalizzabili dedicate al menu, agli eventi e a una galleria
          fotografica.
        </li>
        <li>
          <strong>Sito aziendale:</strong>{" "}
          <a
            href="https://creasitiweb.it/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            creasitiweb.it
          </a>{" "}
          - Creazione di un sito monopagina per promuovere i miei servizi di
          sviluppo web, con un design professionale e responsivo, utilizzando
          React per un&apos;esperienza utente ottimale.
        </li>
      </ul>
    </section>
  );
}

export default Esperienze;
