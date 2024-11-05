import "./App.css";
import CustomNavbar from "./components/Navbar";
import Card from "./components/Card";

import Chisono from "./pages/ChiSono";
import Contatti from "./pages/Contatti";
import Blog from "./pages/Blog";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      {/* Forma decorativa */}
      <div className="decorazione"></div>
      <div className="decorazione2"></div>

      <CustomNavbar />

      {/* Immagine per attivare/disattivare la modalità scura */}
      <img
        onClick={toggleDarkMode}
        src={darkMode ? "/dark-mode.png" : "/dark-mode.png"} // Usa le immagini dalla cartella public
        alt="Toggle Dark Mode"
        className="toggle-icon"
      />
      <span className="tooltip-text">{darkMode ? "Accendi" : "Spegni"}</span>

      <div className="container margin-top">
        <Routes>
          <Route
            path="/"
            element={
              <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center">
                  <Chisono />
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <Card />
                </div>
              </div>
            }
          />
          <Route path="/contatti" element={<Contatti darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog />} /> {/* Corretto */}
        </Routes>
      </div>
    </>
  );
}

export default App;
