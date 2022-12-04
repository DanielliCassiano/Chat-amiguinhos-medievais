import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Room from './pages/Room';

function Rotas() {
    return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Room" element={<Room />} />
        </Routes>
      </Router>
    );
  }
  
  export default Rotas;