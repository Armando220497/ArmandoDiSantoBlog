import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/progetti.css";

function Progetti() {
  return (
    <div className="container my-5">
      <h1 className="text-center title-style">I miei Progetti</h1>
      <div className="row mt-4">
        {/* Prima Card */}
        <div className="col-12 col-md-6 ">
          <div className="progetto-card">
            <img
              className="progetto-card-img"
              src="/img/GreatVibes.jpg"
              alt="Primo Progetto"
            />
            <div className="progetto-card-body">
              <a
                href="https://great-vibess.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary progetto-btn"
              >
                Visita il sito
              </a>
            </div>
          </div>
        </div>

        {/* Seconda Card */}
        <div className="col-12 col-md-6 ">
          <div className="progetto-card">
            <img
              className="progetto-card-img"
              src="/img/Presto.jpg"
              alt="Secondo Progetto"
            />
            <div className="progetto-card-body">
              <a
                href="https://presto-armando-disanto.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary progetto-btn"
              >
                Visita il sito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progetti;
