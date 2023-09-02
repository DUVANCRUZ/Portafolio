import React from 'react';
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <ul>
        <li><a href="#welcome">Inicio</a></li>
        <li><a href="#about">Acerca de Mí</a></li>
        <li><a href="#technologies">Tecnologías</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contáctame</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;