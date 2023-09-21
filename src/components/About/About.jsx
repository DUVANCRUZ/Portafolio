import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons'; // Icon change
import styles from "./About.module.css";
import photo from "../../assets/Images/about.gif";

function About() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <img src={photo} alt="My Image" className={styles.image} /> 
        <div className={styles.textContainer}>
          <h2 className={styles.typewriter}>
            <FontAwesomeIcon icon={faSmile} className={styles.icon} /> 
            I am a developer with experience in various technologies, focused on delivering results. My communication, teamwork, and problem-solving skills allow me to effectively overcome challenges.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
