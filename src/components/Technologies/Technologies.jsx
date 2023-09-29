import React, { useState, useEffect } from 'react';
import { useTrail, animated, config } from 'react-spring';
import styles from './Technologies.module.css';
import {
  DiJavascript1,
  DiFirebase,
  DiMongodb,
  DiMaterializecss,
} from 'react-icons/di';
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaFlask,
} from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { AiFillDatabase } from 'react-icons/ai';

const allTechnologies = [
  { name: 'JavaScript', icon: DiJavascript1 },
  { name: 'Python', icon: FaPython },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'React', icon: FaReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Angular', icon: FaAngular },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'Firebase', icon: DiFirebase },
  { name: 'MongoDB', icon: DiMongodb },
  { name: 'Material UI', icon: DiMaterializecss },
  { name: 'PostgreSQL', icon: FaDatabase },
  { name: 'Sequelize', icon: AiFillDatabase },
  { name: 'Flask', icon: FaFlask },
];

function Technologies({ technologyNames }) {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [technologies, setTechnologies] = useState([]);
  const [technologiesPerRow, setTechnologiesPerRow] = useState(
    window.innerWidth < 768 ? Math.ceil(technologyNames.length / 4) : Math.ceil(technologyNames.length / 2)
  );

  useEffect(() => {
    // Filtrar las tecnologías por los nombres recibidos por props
    const filteredTechnologies = allTechnologies.filter((tech) =>
      technologyNames.includes(tech.name)
    );
    setTechnologies(filteredTechnologies);
  }, [technologyNames]);

  useEffect(() => {
    // Función que se ejecutará cuando cambie el tamaño de la pantalla
    function handleResize() {
      setTechnologiesPerRow(
        window.innerWidth < 768 ? Math.ceil(technologyNames.length / 4) : Math.ceil(technologyNames.length / 2)
      );
    }

    // Agregar el event listener para escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [technologyNames]);

  const trailProps = useTrail(technologies.length, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.wobbly,
  });

  // Divide las tecnologías en las filas correctas
  const rows = [];
  for (let i = 0; i < technologies.length; i += technologiesPerRow) {
    const rowTechnologies = technologies.slice(i, i + technologiesPerRow);
    rows.push(rowTechnologies);
  }

  return (
    <div className={styles.container}>
      <div className={styles.technologiesContainer}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((tech, index) => (
              <animated.div
                key={tech.name}
                className={styles.technology}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{
                  ...trailProps[index],
                  zIndex: hoveredTech === tech.name ? 1 : 0,
                }}
              >
                {React.createElement(tech.icon, {
                  className: hoveredTech === tech.name ? styles.iconHovered : styles.icon,
                })}
                <div className={styles.techName}>{tech.name}</div>
              </animated.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
