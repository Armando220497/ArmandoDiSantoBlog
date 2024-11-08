import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../components/style/blog.css";
import { useEffect, useState, useRef } from "react";

function Blog() {
  const [articles, setArticles] = useState([]);
  const carouselInnerRef = useRef(null); // Riferimento per il contenitore del carosello

  useEffect(() => {
    // Carica l'indice degli articoli
    fetch(
      "https://raw.githubusercontent.com/Armando220497/Blog-articles/main/articles.json"
    )
      .then((response) => response.json())
      .then((articleUrls) => {
        return Promise.all(
          articleUrls.map((url) => fetch(url).then((res) => res.json()))
        );
      })
      .then((data) => {
        setArticles(data); // Imposta lo stato con tutti gli articoli caricati
      })
      .catch((error) =>
        console.error("Errore nel caricamento degli articoli:", error)
      );
  }, []);

  useEffect(() => {
    // Funzione per resettare lo scroll in cima a ogni cambio di slide
    const handleSlide = () => {
      if (carouselInnerRef.current) {
        carouselInnerRef.current.scrollTop = 0; // Resetta la posizione di scorrimento
      }
    };

    const carouselElement = document.querySelector("#articlesCarousel");
    carouselElement.addEventListener("slide.bs.carousel", handleSlide);

    // Cleanup dell'evento quando il componente viene smontato
    return () => {
      carouselElement.removeEventListener("slide.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <>
      <h1 className="blog-title">Blog</h1>

      <div className="container mt-5">
        {/* Carosello di Bootstrap senza scorrimento automatico */}
        <div id="articlesCarousel" className="carousel slide">
          <div ref={carouselInnerRef} className="carousel-inner">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-content">{article.content}</p>
                  <small>
                    {article.date} - {article.author}
                  </small>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#articlesCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#articlesCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
