import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Usa BrowserRouter o HashRouter según tu preferencia
import Home from './components/Home/Home';
import styles from './App.module.css';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router> {/* Envuelve tu aplicación con Router */}
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
