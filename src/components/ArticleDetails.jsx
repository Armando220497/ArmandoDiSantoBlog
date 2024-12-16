import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import articlesData from "../article.json";
import { useEffect } from "react";
import ArticleNotFound from "../pages/ArticleNotFound";

function ArticleDetails({ darkMode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const articleId =
    id && !isNaN(id) && /^\d+$/.test(id) ? parseInt(id, 10) : null;

  const article = articleId
    ? articlesData.find((a) => a.id === articleId)
    : null;

  useEffect(() => {
    // Scrolla la pagina all'inizio ogni volta che l'articolo cambia
    window.scrollTo(0, 0); // Forza lo scroll in cima alla pagina
    if (!articleId || !article) {
      navigate("/article-not-found");
    }
  }, [articleId, article, navigate]);

  if (!articleId || !article) {
    return <ArticleNotFound darkMode={darkMode} />;
  }

  return (
    <div className="container container-articolo mt-5">
      <h1 className="article-title">{article.title}</h1>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
      <small className="article-date">
        {article.date} - {article.author}
      </small>

      <button onClick={() => navigate(-1)} className="btn btn-article">
        Torna indietro
      </button>
    </div>
  );
}

ArticleDetails.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default ArticleDetails;
