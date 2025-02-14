import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import FichaFundicion from './pages/FichaFundicion';
import FichaMecanizado from './pages/FichaMecanizado';
import FichaCalidad from './pages/FichaCalidad';
import IngenieriaYProyectos from './pages/FichaIngenieria';
import FichaTecnicaGalvanizado from './pages/FichaGalvanizado';
import FichaGalvanizado from './pages/FichaGalvanizado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/proceso/1" element={<FichaFundicion />} />
        <Route path="/proceso/2" element={<FichaMecanizado />} />
        <Route path="/proceso/3" element={<FichaCalidad />} />
        <Route path="/proceso/4" element={<IngenieriaYProyectos />} />
        <Route path="/proceso/5" element={<FichaGalvanizado />} />
      </Routes>
    </Router>
  );
}

export default App;