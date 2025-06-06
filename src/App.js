import { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { useTranslation } from 'react-i18next';

function App() {
  const [clickedLink, setcliCkedLink] = useState("Home");


  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('dark-mode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : true;
  });

  // Language state
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? JSON.parse(savedLanguage) : 'en'
  })

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };
  
  // Set dark mode state to localStorage
  useEffect(() => {
    localStorage.setItem('dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Set language state to localStorage
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', JSON.stringify(language));
  }, [language, i18n]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Fragment>
      <div className={`${darkMode && "dark"}`}>
        <Router>
          <div className="fixed top-0 w-full z-50">
            <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} setcliCkedLink={setcliCkedLink} clickedLink={clickedLink} language={language} changeLanguage={changeLanguage} t={t}/>
          </div>
          <Routes>
            <Route exact path="/" element={<Home location={"home"} clickedLink={clickedLink} setcliCkedLink={setcliCkedLink} t={t} language={language}/>}/>
            {/* <Route exact path="/home" element={<Home location={"home"} clickedLink={clickedLink} setcliCkedLink={setcliCkedLink} t={t} language={language}/>}/> */}
            <Route exact path="/about" element={<Home location={"about"} clickedLink={clickedLink} setcliCkedLink={setcliCkedLink} t={t} language={language}/>}/>
            <Route exact path="/skills" element={<Home location={"skills"} clickedLink={clickedLink} setcliCkedLink={setcliCkedLink} t={t} language={language}/>}/>
            <Route exact path="/projects" element={<Home location={"projects"} clickedLink={clickedLink} setcliCkedLink={setcliCkedLink} t={t} language={language}/>}/>
            <Route exact path="/contacts" element={<Home location={"contacts"} clickedLink={clickedLink} setcliCkedLink={setcliCkedLink} t={t} language={language}/>}/>
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
