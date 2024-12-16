import "./style/competenze.css";
function Competenze() {
  return (
    <section className="competenze">
      <h2 className="title-style">Competenze tecniche</h2>
      <p className="testo">
        Ho acquisito competenze avanzate nello sviluppo web grazie a corsi
        pratici, esercitazioni e progetti concreti. Mi sono specializzato
        nell&apos;utilizzo di tecnologie moderne e framework, come React,
        Laravel, e JavaScript, per creare soluzioni web sia lato frontend che
        lato backend. Mi occupo della progettazione e dello sviluppo di
        interfacce utente interattive e responsive, integrando le migliori
        pratiche di sviluppo e garantendo un&apos;ottima esperienza utente su
        ogni dispositivo. Inoltre, gestisco il codice in modo efficiente
        utilizzando Git per il controllo delle versioni, e sviluppo applicazioni
        scalabili e sicure grazie alla conoscenza dei principali linguaggi di
        programmazione web, come HTML, CSS, PHP e JavaScript.
      </p>
      <ul
        className="list-unstyled d-flex flex-wrap social-list"
        style={{ marginBottom: "0px" }}
      >
        <li
          className="badge"
          style={{
            backgroundColor: "#E44D26",
            color: "white",
            margin: "5px",
          }}
        >
          HTML
        </li>
        <li
          className="badge"
          style={{
            backgroundColor: "#1572B6",
            color: "white",
            margin: "5px",
          }}
        >
          CSS
        </li>
        <li
          className="badge"
          style={{
            backgroundColor: "#F7DF1E",
            color: "black",
            margin: "5px",
          }}
        >
          JavaScript
        </li>
        <li
          className="badge"
          style={{
            backgroundColor: "#61DAFB",
            color: "black",
            margin: "5px",
          }}
        >
          React
        </li>
        <li
          className="badge"
          style={{
            backgroundColor: "#777BB4",
            color: "white",
            margin: "5px",
          }}
        >
          PHP
        </li>
        <li
          className="badge"
          style={{
            backgroundColor: "#F05032",
            color: "white",
            margin: "5px",
          }}
        >
          Git & GitHub
        </li>
        <li
          className="badge"
          style={{
            backgroundColor: "#563D7C",
            color: "white",
            margin: "5px",
          }}
        >
          Bootstrap
        </li>
        <li
          className="badge"
          style={{
            backgroundColor: "#FF2D20",
            color: "white",
            margin: "5px",
          }}
        >
          Laravel
        </li>
      </ul>

      {/* Testo cliccabile con link al blog */}
      <p className="mt-4">
        Per approfondire le tecnologie che studio e leggi gli articoli che ho
        scritto, visita il mio{" "}
        <a
          href="https://armandodisanto.netlify.app/blog"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "none" }}
        >
          Blog
        </a>
        .
      </p>
    </section>
  );
}

export default Competenze;
