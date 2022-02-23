import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="App">
      <Schedule />
      <Calendar />
    </div>
  );
}

export default App;
