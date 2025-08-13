import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/headercomp/Header';
import "./stylings/header.css";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
