import { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { useTranslation } from 'react-i18next';

function App() {
  const [clickedLink, setcliCkedLink] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('dark-mode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  const [language, setLanguage] = useState('en');

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };
  
  // Aggiorna il localStorage quando lo stato del tema cambia
  useEffect(() => {
    localStorage.setItem('dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Fragment>
      <div className={`${darkMode && "dark"}`}>
        <Router>
          <div className="fixed top-0 w-full z-50">
            <Navbar
              darkMode={darkMode}
              handleDarkMode={handleDarkMode}
              setcliCkedLink={setcliCkedLink}
              language={language}
              changeLanguage={changeLanguage}
              t={t}
            />
          </div>

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  location={"home"}
                  clickedLink={clickedLink}
                  setcliCkedLink={setcliCkedLink}
                />
              }
            />
            <Route
              exact
              path="/home"
              element={
                <Home
                  location={"home"}
                  clickedLink={clickedLink}
                  setcliCkedLink={setcliCkedLink}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={
                <Home
                  location={"about"}
                  clickedLink={clickedLink}
                  setcliCkedLink={setcliCkedLink}
                />
              }
            />
            <Route
              exact
              path="/skills"
              element={
                <Home
                  location={"skills"}
                  clickedLink={clickedLink}
                  setcliCkedLink={setcliCkedLink}
                />
              }
            />
            <Route
              exact
              path="/projects"
              element={
                <Home
                  location={"projects"}
                  clickedLink={clickedLink}
                  setcliCkedLink={setcliCkedLink}
                />
              }
            />
            <Route
              exact
              path="/contacts"
              element={
                <Home
                  location={"contacts"}
                  clickedLink={clickedLink}
                  setcliCkedLink={setcliCkedLink}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
