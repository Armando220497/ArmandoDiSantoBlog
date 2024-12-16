import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/style/blog.css";
import articlesData from "../article.json";

function Blog() {
  const articles = articlesData;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Forza il comportamento di scroll ogni volta che la pagina viene caricata
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolla alla parte superiore della pagina ogni volta che il componente viene caricato
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (id) => {
    if (isMobile && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        navigate(`/article/${id}`);
      }, 900);
    } else if (!isMobile) {
      navigate(`/article/${id}`);
    }
  };

  return (
    <>
      <h1 className="title-style text-center mt-5">Blog</h1>

      <div className="container mt-5">
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card" onClick={() => handleCardClick(article.id)}>
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-date">
                    <small>Pubblicato il: {article.date}</small>
                  </p>
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
