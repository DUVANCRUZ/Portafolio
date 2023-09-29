import React, { useState } from 'react';
import styles from "./NavBar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰ {/* Carácter de hamburguesa */}
      </button>
      <ul className={isMenuOpen ? styles.menuOpen : styles.menu}>
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
