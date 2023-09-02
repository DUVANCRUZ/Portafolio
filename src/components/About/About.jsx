import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons'; // Cambio de icono
import styles from "./About.module.css";
import foto from "../../assets/Images/about.gif";

function About() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <img src={foto} alt="Mi Imagen" className={styles.image} /> 
        <div className={styles.textContainer}>
          <h2 className={styles.typewriter}>
            <FontAwesomeIcon icon={faSmile} className={styles.icon} /> 
            Soy un desarrollador con experiencia en varias tecnologías, enfocado en obtener resultados. Mi comunicación, trabajo en equipo y habilidades de resolución de problemas me permiten superar desafíos eficazmente
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
