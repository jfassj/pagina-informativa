import React from 'react';
import Alumno from './Alumno';
import '../CSS/Alumnos.css';
import jared from '../images/jared.jpg';
import gustavo from '../images/gustavo.jpg';
import martin from '../images/martin.jpg'
import jaredcv from '../documents/jared-cv.pdf'
import martincv from '../documents/martin-cv.pdf'
import gustavocv  from '../documents/gustavo-cv.pdf'

const Alumnos = () => {
  return (
    <section id="alumnos" className="alumnos-section">
      <h2>Alumnos</h2>
      <div className="alumnos-container">
        <Alumno 
          name="Jared"
          imgSrc={jared}
          cvLink={jaredcv}
        />
        <Alumno 
          name="Martín"
          imgSrc={martin}
          cvLink={martincv}
        />
        <Alumno 
          name="Gustavo"
          imgSrc={gustavo}
          cvLink={gustavocv}
        />
      </div>
    </section>
  );
};

export default Alumnos;
