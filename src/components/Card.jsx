import "bootstrap/dist/css/bootstrap.min.css";
import "./style/card.css";

function Card() {
  return (
    <div className="container container-card">
      <h1 className="mb-3 text-center main-title">Web Developer</h1>

      <section className="card-flip-container">
        <div className="card-flip">
          {/* Lato Frontale */}
          <div className="card-front">
            <img
              className="card-img-custom"
              src="/img/foto-profilo.png"
              alt="Armando Di Santo"
            />
          </div>

          {/* Lato Posteriore */}
          <div className="card-back">
            <p>
              Ciao! Sono Armando, un Web Developer appassionato di creare siti
              web moderni e funzionali. 🚀
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
