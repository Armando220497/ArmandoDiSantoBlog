import PropTypes from "prop-types"; // Importa PropTypes
import { useNavigate } from "react-router-dom";
import "../components/style/not-found.css";

const NotFound = ({ darkMode }) => {
  // Destrutturazione corretta della prop darkMode
  const navigate = useNavigate();

  const goBack = () => {
    // Se la cronologia del browser è disponibile, torna indietro
    navigate(-1);
  };

  const goHome = () => {
    // Altrimenti, naviga alla Home
    navigate("/");
  };

  return (
    <div className={`notfound-container ${darkMode ? "dark-mode" : ""}`}>
      {" "}
      {/* Applica darkMode dinamicamente */}
      <h1 className="notfound-title">404 - Pagina non trovata</h1>
      <p className="notfound-text">La pagina che stai cercando non esiste.</p>
      <div className="notfound-buttons">
        <button className="btn back-btn" onClick={goBack}>
          Torna indietro
        </button>
        <button className="btn home-btn" onClick={goHome}>
          Vai alla Home
        </button>
      </div>
    </div>
  );
};

// Validazione delle props
NotFound.propTypes = {
  darkMode: PropTypes.bool.isRequired, // Assicurati che darkMode venga passato come prop
};

export default NotFound;
