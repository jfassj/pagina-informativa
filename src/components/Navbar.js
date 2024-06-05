import React from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#conceptos">Conceptos</a></li>
        <li><a href="#alumnos">Alumnos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
