import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.slide} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
