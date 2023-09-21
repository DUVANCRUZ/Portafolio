import React from 'react';
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <ul>
        <li><a href="#welcome">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
