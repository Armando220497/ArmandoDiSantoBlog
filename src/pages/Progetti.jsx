import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/progetti.css";

function Progetti() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center progetti-title">I miei Progetti</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        className="custom-carousel mt-4"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/GreatVibes.jpg"
            alt="Primo Progetto"
          />
          <Carousel.Caption>
            <a
              href="https://great-vibess.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visita il sito
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/Presto.jpg"
            alt="Secondo Progetto"
          />
          <Carousel.Caption>
            <a
              href="https://presto-armando-disanto.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visita il sito
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Progetti;
