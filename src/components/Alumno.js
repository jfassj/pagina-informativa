import React from 'react';
import '../CSS/Alumno.css';

const Alumno = ({ name, imgSrc, cvLink }) => {
  return (
    <div className="alumno">
      <img src={imgSrc} alt={`${name}`} className="alumno-img"/>
      <h3>{name}</h3>
      <a href={cvLink} className="alumno-cv-link" download>Descargar CV</a>
    </div>
  );
};

export default Alumno;
