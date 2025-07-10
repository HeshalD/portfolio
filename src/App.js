import './App.css';
import React from 'react';
import { Routes, Route, Router } from "react-router"
import Portfolio from './Portfolio/Portfolio';
import HeroSection from './HeroSection/HeroSection';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Roadmap from './RoadMap/Roadmap';
import ProjectsSection from './ProjectsSection/ProjectsSection';

function App() {

  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Portfolio/>}/>
          <Route path="/hero" element={<HeroSection/>}/>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/roadmap" element={<Roadmap/>}/>
          <Route path="/projects" element={<ProjectsSection/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
