import { useNavigate } from "react-router-dom";
import "../components/style/NotFound.css";
const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1); // Torna alla pagina precedente
  const goHome = () => navigate("/"); // Vai alla Home

  return (
    <div className="notfound-container">
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

export default NotFound;
