import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.css';
import { motion } from "framer-motion"
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Fragment>
      <div className={`${darkMode && 'dark'}`}>
        <Router>
          <div className='fixed top-0 w-full z-50'>
            <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode}/>
          </div>

          <Routes>
            <Route exact path="/" element={<Home location={"home"} />} />
            <Route exact path="/home" element={<Home location={"home"} />} />
            <Route exact path="/about" element={<Home location={"about"} />} />
            <Route exact path="/skills" element={<Home location={"skills"} />} />
            <Route exact path="/projects" element={<Home location={"projects"} />} />
            <Route exact path="/contatti" element={<Home location={"contatti"} />} />
          </Routes>

        </Router>
      </div>
    </Fragment>
  );
}

export default App;
