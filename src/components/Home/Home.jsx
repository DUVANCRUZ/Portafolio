// App.js
import React from 'react';
import Navbar from '../NavBar/NavBar';
import About from '../About/About';
import HomeTec from '../HomeTec/HomeTec';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Welcome from "../Welcome/Welcome";
import styles from './Home.module.css'; // Importa tus estilos aquí

function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.Navbar}>
          <Navbar />  
        </div>
      <div className={styles.content}>
        <Welcome />
        <About/>
        <HomeTec />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
