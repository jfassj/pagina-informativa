import React from 'react';
import '../CSS/Conceptos.css';
import imagen from '../images/Modelo-Riesgos.png'

const Conceptos = () => {
  return (
    <section id="conceptos" className="conceptos-section">
      <h2>Conceptos</h2>
      <div className="concepto">
        <h3>Administración</h3>
        <p>Definición 1: La administración es el proceso de planificar, organizar, dirigir y controlar los recursos de una organización para alcanzar objetivos específicos.</p>
        <p>Definición 2: Es el arte de coordinar eficazmente los recursos humanos y materiales para lograr metas organizacionales.</p>
        <p>Definición 3: Consiste en la ejecución de actividades que permiten a una organización funcionar y cumplir con sus objetivos.</p>
      </div>
      <div className="concepto">
        <h3>Administración de Proyectos</h3>
        <p>Definición 1: Es la aplicación de conocimientos, habilidades, herramientas y técnicas a las actividades del proyecto para cumplir con sus requisitos.</p>
        <p>Definición 2: Involucra la planificación, organización y gestión de tareas y recursos para completar un proyecto de manera exitosa.</p>
      </div>
      <div className="concepto">
        <h3>Negociación</h3>
        <p>Concepto 1: Es el proceso mediante el cual dos o más partes intentan alcanzar un acuerdo que satisfaga sus intereses mutuos.</p>
        <p>Concepto 2: Involucra la comunicación y discusión entre partes con el objetivo de resolver diferencias y llegar a un acuerdo común.</p>
      </div>
      <div className="concepto">
        <h3>Proceso Administrativo</h3>
        <p>El proceso administrativo es un conjunto de funciones básicas (planificación, organización, dirección y control) que se realizan para alcanzar objetivos organizacionales de manera eficiente y eficaz.</p>
      </div>
      <div className="concepto">
        <h3>Manipulación</h3>
        <p>Concepto 1: Es la acción de influir o controlar a una persona o situación de manera indirecta o engañosa.</p>
        <p>Concepto 2: Implica manejar o utilizar algo o a alguien con habilidad, a menudo para alcanzar un objetivo específico.</p>
      </div>
      <div className="concepto">
        <h3>Eficacia</h3>
        <p>La eficacia es la capacidad de alcanzar los objetivos propuestos o producir el efecto deseado.</p>
      </div>
      <div className="concepto">
        <h3>Eficiencia</h3>
        <p>La eficiencia es la capacidad de realizar una tarea o alcanzar un objetivo utilizando la menor cantidad de recursos posibles.</p>
      </div>
      <div className="concepto">
        <h3>Riesgos en Proyectos</h3>
        <p>Riesgo 1: La posibilidad de que ocurra un evento que impacte negativamente en los objetivos del proyecto.</p>
        <p>Riesgo 2: Es la probabilidad de un evento adverso y su consecuencia en términos de impacto en el proyecto.</p>
        <p>Riesgo 3: La incertidumbre que puede afectar el logro de los objetivos del proyecto.</p>
      </div>
      <div className="concepto">
        <h3>Definiciones de Riesgos en Proyectos</h3>
        <p>Definición 1: Un riesgo en proyectos es cualquier evento o condición incierta que, si ocurre, tiene un efecto positivo o negativo en los objetivos del proyecto.</p>
        <p>Definición 2: Se refiere a la exposición a la posibilidad de que los objetivos del proyecto no se alcancen debido a eventos inciertos.</p>
      </div>
      <div className="concepto">
        <h3>Modelo de Riesgos</h3>
        <img src={imagen} alt={"Modelo de Riesgos"}/>
      </div>
      <div className='concepto'>
        <h3>Administrador de Proyecto Elegido</h3>
        <a href='https://trello.com/invite/b/YDupWVVg/ATTI08459c850c785a2fdca402684a9dea081D3642FA/admin' target='_blank' rel="noreferrer"><p>Ver Tablero en Trello</p></a>
      </div>
    </section>
  );
};

export default Conceptos;
