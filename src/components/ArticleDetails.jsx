import PropTypes from "prop-types"; // Aggiungi questa importazione
import { useParams, useNavigate } from "react-router-dom";
import articlesData from "../article.json";
import { useEffect } from "react";
import ArticleNotFound from "../pages/ArticleNotFound"; // Importa la pagina ArticleNotFound

function ArticleDetails({ darkMode }) {
  const { id } = useParams(); // Ottieni l'id dall'URL
  const navigate = useNavigate(); // Funzione per navigare

  // Verifica se l'ID è numerico
  const articleId =
    id && !isNaN(id) && /^\d+$/.test(id) ? parseInt(id, 10) : null; // Controlla che l'ID sia solo numerico

  // Trova l'articolo con l'ID corrispondente
  const article = articleId
    ? articlesData.find((a) => a.id === articleId)
    : null;

  useEffect(() => {
    // Se l'ID non è valido o l'articolo non esiste, naviga alla pagina di errore
    if (!articleId || !article) {
      navigate("/article-not-found"); // Naviga a ArticleNotFound
    }
  }, [articleId, article, navigate]); // Esegui il reindirizzamento quando l'articolo o l'ID cambiano

  // Se l'articolo non esiste o l'ID non è valido, non renderizzare nulla
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

      {/* Pulsante per tornare indietro */}
      <button
        onClick={() => navigate(-1)} // Torna indietro di una pagina
        className="btn btn-article"
      >
        Torna indietro
      </button>
    </div>
  );
}

// Aggiungi la validazione per la prop `darkMode`
ArticleDetails.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default ArticleDetails;
