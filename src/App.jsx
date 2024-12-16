import "./App.css";
import CustomNavbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom"; // Importa useLocation
import { useState, useEffect } from "react";
import Chisono from "./pages/ChiSono";
import Competenze from "./components/Competenze";
import Card from "./components/Card";
import Esperienze from "./components/Esperienze";
import Obiettivi from "./components/Obiettivi";
import Contatti from "./pages/Contatti";
import Blog from "./pages/Blog";
import ArticleDetails from "./components/ArticleDetails";
import Progetti from "./pages/Progetti";
import ArticleNotFound from "./pages/ArticleNotFound";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  // Recupera la preferenza della modalità dark dal localStorage
  const savedDarkMode = localStorage.getItem("darkMode") === "true";

  const [darkMode, setDarkMode] = useState(savedDarkMode);

  // Gestione della modalità scura
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Salva la preferenza nel localStorage
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Ottieni la posizione corrente del percorso
  const location = useLocation();

  useEffect(() => {
    // Scorri in alto ogni volta che cambia il percorso
    window.scrollTo(0, 0);
  }, [location]); // L'effetto si attiva ogni volta che la posizione cambia

  return (
    <>
      {/* Navbar */}
      <div className="container-navbar">
        <CustomNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container-fluid">
                <div className="row first-row">
                  {/* Card */}
                  <div className="col-12 col-md-4 d-flex justify-content-center align-items-start">
                    <Card />
                  </div>

                  {/* Chi sono */}
                  <div className="col-12 col-md-4 d-flex justify-content-center align-items-start">
                    <Chisono />
                  </div>

                  {/* Competenze */}
                  <div className="col-12 col-md-4 d-flex justify-content-center align-items-start">
                    <Competenze />
                  </div>
                </div>

                {/* Seconda riga */}
                <div className="row second-row">
                  <div className="col-12 col-lg-6 mb-3">
                    <Esperienze />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <Obiettivi />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/contatti" element={<Contatti darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} />} />
          <Route path="/progetti" element={<Progetti darkMode={darkMode} />} />
          <Route
            path="/article/:id"
            element={<ArticleDetails darkMode={darkMode} />}
          />
          <Route path="*" element={<NotFound darkMode={darkMode} />} />
          <Route
            path="/article-not-found"
            element={<ArticleNotFound darkMode={darkMode} />}
          />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
