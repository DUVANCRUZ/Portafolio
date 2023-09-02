// App.js
import React from 'react';
import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Welcome from './components/Welcome/Welcome';
import styles from './App.module.css'; // Importa tus estilos aquí

function App() {
  return (
    <div className={styles.container}>
        <div className={styles.Navbar}>
          <Navbar />  
        </div>
      <div className={styles.content}>
        <Welcome />
        <About/>
        <Technologies />
        <Projects />
        <Contact />
      </div>ss
    </div>
  );
}

export default App;
