import React from 'react';
import '../CSS/Calculadora.css';

function Calculadora() {
  const handleRedirect = (url) => {
    window.location.href = url;
  }

  return (
    <div className="calculadora-container">
        <h1>Calculadoras</h1>
      <button className="calculadora-button" onClick={() => handleRedirect('https://jfassj.projectsutd.online/Calculadora/efectividad_cotidiana.html')}>
        Efectividad Cotidiana
      </button>
      <button className="calculadora-button" onClick={() => handleRedirect('https://jfassj.projectsutd.online/Calculadora/efectividad_empresarial.html')}>
        Efectividad Empresarial
      </button>
      <button className="calculadora-button" onClick={() => handleRedirect('https://jfassj.projectsutd.online/Calculadora/efectividad_eficiencia_eficacia.html')}>
        Efectividad, Eficiencia y Eficacia
      </button>
      <button className="calculadora-button" onClick={() => handleRedirect('https://jfassj.projectsutd.online/Calculadora/rio.html')}>
        Río
      </button>

    </div>
  );
}

export default Calculadora;
