import './App.css';
import React, { usestate, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Tools from './components/Tools/Tools';

function App() {
  // STATES


  // EFFECTS


  // FUNCTIONS


  // APP
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="about" element={<About/>}/>

            <Route path="tools" element={<Tools/>}/>

          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

// Next steps
// - Work on the Navbar
