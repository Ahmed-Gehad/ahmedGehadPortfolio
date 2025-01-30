import React from 'react';
import './App.css';

import Navv from './Component/Navv';
import Landing from './Component/Landing';
import About from './Component/About';
import Experience from './Component/Experience';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navv />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
