import React from 'react';
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

const technologies = [
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

const technologiesPerRow = 7; // Cambiar para mostrar 7 tecnologías por fila

function Technologies() {
  const [hoveredTech, setHoveredTech] = React.useState(null);

  const trailProps = useTrail(technologies.length, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.wobbly,
  });

  const technologiesTopRow = technologies.slice(0, technologiesPerRow);
  const technologiesBottomRow = technologies.slice(
    technologiesPerRow,
    technologies.length
  );

  return (
    <div id="technologies" className={styles.container}>
      <h1 className={styles.heading}>Tecnologías</h1>
      <div className={styles.technologiesContainer}>
        <div className={styles.row}>
          {technologiesTopRow.map((tech, index) => (
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
        <div className={styles.row}>
          {technologiesBottomRow.map((tech, index) => (
            <animated.div
              key={tech.name}
              className={styles.technology}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{
                ...trailProps[index + technologiesPerRow],
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
      </div>
    </div>
  );
}

export default Technologies;
