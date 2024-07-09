import React from 'react';
import Conceptos from './components/Conceptos';
import Alumnos from './components/Alumnos';
import './App.css';
import Calculadora from './components/Calculadora';


function App() {
  return (
    <div className="App">
      <Calculadora/>
      <Conceptos />
      <Alumnos />
    </div>
  );
}

export default App;

