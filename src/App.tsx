import React from 'react';
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="h-screen text-white bg-slate-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
