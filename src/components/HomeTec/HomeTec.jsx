import React from 'react';
import Technologies from '../Technologies/Technologies';
import styles from './HomeTec.module.css'; 

function HomeTec() {
    let technologies=[
        "JavaScript",
        "Python",
        'Node.js',
        'React',
        'Redux',
        'Angular',
        'CSS',
        'HTML',
        'Firebase',
        'MongoDB',
        'Material UI',
        'PostgreSQL',
        'Sequelize',
        'Flask',           
    ]
  return (
    <div id="technologies"  className={styles.container}>
        
        
        <Technologies technologyNames={technologies} />
        
    </div>
  
  );
}

export default HomeTec;
