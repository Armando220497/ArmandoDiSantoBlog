import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../components/style/blog.css";
import { useEffect, useState, useRef } from "react";

function Blog() {
  const [articles, setArticles] = useState([]);
  const carouselInnerRef = useRef(null);

  useEffect(() => {
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
        setArticles(data);
      })
      .catch((error) =>
        console.error("Errore nel caricamento degli articoli:", error)
      );
  }, []);

  useEffect(() => {
    const handleSlide = () => {
      if (carouselInnerRef.current) {
        carouselInnerRef.current.scrollTop = 0;
      }
    };

    const carouselElement = document.querySelector("#articlesCarousel");
    carouselElement.addEventListener("slide.bs.carousel", handleSlide);

    return () => {
      carouselElement.removeEventListener("slide.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <>
      <h1 className="blog-title">Blog</h1>

      <div className="container mt-5">
        <div id="articlesCarousel" className="carousel slide">
          <div ref={carouselInnerRef} className="carousel-inner">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <h2 className="article-title">{article.title}</h2>
                  <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  ></div>
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
