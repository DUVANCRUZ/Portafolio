import React from 'react';
import styles from "./Welcome.module.css";
import photo from "../../assets/Images/foto.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

function Welcome() {
  return (
    <div id="welcome" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.typewriter}>
            <FontAwesomeIcon icon={faHandPeace} className={styles.icon} /> Hello, I'm Duvan Cruz,
          </h2>
          <p className={styles.typewriter}>Web Developer</p>
        </div>
        <img src={photo} alt="My Image" className={styles.image} /> 
      </div>
    </div>
  );
}

export default Welcome;
