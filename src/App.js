import React from 'react';
import './App.css';
import Navv from './Component/Navv';
import Landing from './Component/Landing';
import About from './Component/About';
import Experience from './Component/Experience';

function App() {
  return (
    <div className="App">
      <Navv />
      <Landing />
      <About />
      <Experience />
    </div>
  );
}

export default App;
