import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ProfessionalLevel from './pages/ProfessionalLevel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/professional-level' element={<ProfessionalLevel />} />
      </Routes>
    </Router>
  );
}

export default App;
