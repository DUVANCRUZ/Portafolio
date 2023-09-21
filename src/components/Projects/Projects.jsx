import React from 'react';
import Carousel from '../Carousel/Carousel';
import img1 from '../../assets/Images/proyecto1/a.jpg';
import img2 from '../../assets/Images/proyecto1/b.jpg';
import img3 from '../../assets/Images/proyecto1/c.jpg';
import img4 from '../../assets/Images/proyecto1/d.jpg';
import img5 from '../../assets/Images/proyecto1/e.jpg';
import img6 from '../../assets/Images/proyecto1/f.jpg';
import img7 from '../../assets/Images/proyecto2/a.jpg';
import img8 from '../../assets/Images/proyecto2/b.jpg';
import img9 from '../../assets/Images/proyecto2/c.jpg';
import img10 from '../../assets/Images/proyecto2/d.jpg';
import img11 from '../../assets/Images/proyecto2/e.jpg';
import img12 from '../../assets/Images/proyecto2/f.jpg';
import img13 from '../../assets/Images/proyecto3/a.jpg';
import img14 from '../../assets/Images/proyecto3/b.jpg';
import img15 from '../../assets/Images/proyecto3/c.jpg';
import img16 from '../../assets/Images/proyecto3/d.jpg';
import img17 from '../../assets/Images/proyecto3/e.jpg';
import img18 from '../../assets/Images/proyecto3/f.jpg';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom'

const projectsData = [
  {
    images: [img1, img2, img3, img4, img5, img6],
    name: 'Food App',
    githubLink: "https://github.com/DUVANCRUZ/pifOOD/",
    deployLink: "https://front-end-food.onrender.com",

  },
  {
    images: [img7, img8, img9, img10, img11, img12],
    name: 'Naruto Web',
    githubLink: "https://github.com/DUVANCRUZ/NarutoWeb",
    deployLink: "https://narutoweb.netlify.app/",
  },
  {
    images: [img13, img14, img15, img16, img17, img18],
    name: 'CELIAC CAFETERIA',
    githubLink: "https://github.com/DUVANCRUZ/Cafeteria",
    deployLink: "https://cafeteria-steel.vercel.app/",
  },
];

function Projects() {
  return (
    <div className={styles.container} id="projects">
      <h1>Projects</h1>
      <div className={styles.projects}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectContainer}>
            <h2>{project.name}</h2>
            <div className={styles.projectContent}>
              <div className={styles.carousel}>
                <Carousel images={project.images} />
              </div>
              <div className={styles.projectButtons}>
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectButton}
                >
                  Deploy
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectButton}
                >
                  GitHub
                </a>
                <Link to={`/${index + 1}`} className={styles.projectButton}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;