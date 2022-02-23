import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Care from './components/Care';
import DoneMessage from './components/DoneMessage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/care" element={<Care />} />
      <Route path="/care/final" element={<DoneMessage />} />
    </Routes>
  );
}

export default App;
