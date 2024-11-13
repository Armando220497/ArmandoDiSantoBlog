import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/style/blog.css";
import articlesData from "../article.json";

function Blog() {
  const articles = articlesData;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Funzione per rilevare la larghezza dello schermo
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Considera mobile quando la larghezza è <= 768px
    };

    handleResize(); // Chiamata iniziale per impostare lo stato
    window.addEventListener("resize", handleResize);

    // Rimuovere l'event listener quando il componente è smontato
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (id) => {
    if (isMobile && !isAnimating) {
      setIsAnimating(true);
      // Esegui l'animazione sulla card
      setTimeout(() => {
        navigate(`/article/${id}`); // Usa navigate per spostarsi alla pagina dell'articolo
      }, 900); // Durata dell'animazione in ms
    } else if (!isMobile) {
      // Se non è mobile, vai direttamente alla pagina dell'articolo senza animazione
      navigate(`/article/${id}`);
    }
  };

  return (
    <>
      <h1 className="blog-title text-center">Blog</h1>

      <div className="container mt-5">
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-12 col-sm-6 col-md-4 mb-4">
              {/* Rendi cliccabile l'intera card */}
              <div
                className="card h-100"
                onClick={() => handleCardClick(article.id)} // Gestisci il clic sulla card
              >
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-date">
                    <small>Pubblicato il: {article.date}</small>
                  </p>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{
                      __html:
                        article.content.length > 100
                          ? `${article.content.substring(0, 100)}...`
                          : article.content,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
