import "../components/style/chi-sono.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ChiSono() {
  return (
    <section className="chi-sono">
      <h2 className="title-style">Chi sono</h2>
      <p className="testo">
        Mi chiamo Armando Di Santo, nato il 22 aprile 1997, e sono un Web
        Developer con una solida formazione accademica e un percorso autodidatta
        che mi ha permesso di approfondire le tecnologie moderne. Attualmente
        sto completando la laurea in Comunicazione e Multimedialità, un campo
        che unisce la creatività al pensiero tecnico, e mi permette di
        sviluppare soluzioni innovative per il web. Sono appassionato di
        tecnologia e sviluppo software, sempre alla ricerca di nuovi strumenti e
        metodologie per migliorare le mie competenze. La mia passione per la
        risoluzione di problemi concreti mi spinge a lavorare su progetti web,
        creando esperienze utente intuitive e funzionali. La mia carriera è in
        continua evoluzione, e sono sempre motivato a imparare e affrontare
        nuove sfide. Puoi scoprire di più su di me e vedere i miei progetti
        visitando il mio{" "}
        <a
          href="https://www.linkedin.com/in/armando-di-santo-06415b273"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "none" }}
        >
          profilo LinkedIn
        </a>{" "}
        e il mio{" "}
        <a
          href="https://github.com/Armando220497"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "none" }}
        >
          GitHub
        </a>
        .
      </p>
      <div className="d-flex justify-content-center">
        <div className="icon-container d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/armando-di-santo-06415b273"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#3D39E1" }}
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
              style={{ color: "#333", paddingRight: "10px" }}
            />
          </a>
        </div>
        <a
          href="/CV_Armando_Di_Santo_2024.pdf"
          download
          className="btn  btn-curriculum"
        >
          Scarica il mio Curriculum
        </a>
      </div>
    </section>
  );
}

export default ChiSono;
