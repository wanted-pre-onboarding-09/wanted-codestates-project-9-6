import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Care from './components/Care';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/care" element={<Care />} />
    </Routes>
  );
}

export default App;
