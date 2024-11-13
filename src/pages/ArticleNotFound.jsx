import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../components/style/NotFound.css";

const ArticleNotFound = ({ darkMode }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/Blog");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={`notfound-container ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="notfound-title">404 - Articolo non trovato</h1>
      <p className="notfound-text">
        L&apos;articolo che stai cercando non esiste.
      </p>
      <div className="notfound-buttons">
        <button className="btn back-btn" onClick={goBack}>
          Torna agli articoli
        </button>
        <button className="btn home-btn" onClick={goHome}>
          Vai alla Home
        </button>
      </div>
    </div>
  );
};

ArticleNotFound.propTypes = {
  darkMode: PropTypes.bool.isRequired, // Assicurati che darkMode venga passato come prop
};

export default ArticleNotFound;
