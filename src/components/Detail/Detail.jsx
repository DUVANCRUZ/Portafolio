import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React, { useState } from "react";
import styles from "./Detail.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import projects from "../../projects.json";
import Carousel from "../Carousel/Carousel";
import Technologies from "../Technologies/Technologies";

export default function Detail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));
  const [showDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();

  if (!project) {
    return <div>No se encontró el proyecto.</div>;
  }

  const images = [];
  project.images.map((imageName) => {
    let ruta = require(`../../assets/Images/${project.numero}/${imageName}`);
    images.push(ruta);
  });

  return (
    <div className={styles.container}>
      <div className={styles["left-side"]}>
        <h1 className={styles.title}>{project.name}</h1>
        <div className={styles["project-details"]}>
          <Technologies technologyNames={project.technologies} />
          <h2>Description</h2>
          {showDescription ? (
            <p>{project.description}</p>
          ) : (
            <p className={styles.hidden}>{project.description}</p>
          )}
          <button
            className={styles["show-description-button"]}
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Hide Description" : "Show Description"}
          </button>
          <div className={styles.links}>
            <div className={styles.iconLink}>
              <a href={project.githubLink}>
                <FaGithub className={styles.icon} />
                <span>GitHub</span>
              </a>
            </div>
            <div className={styles.iconLink}>
              <a href={project.deployLink}>
                <FaExternalLinkAlt className={styles.icon} />
                <span>Deploy</span>
              </a>
            </div>
          </div>
          <button
            className={styles["go-back-button"]}
            onClick={() => navigate("/")}
          >
            Go to Back
          </button>
        </div>
      </div>
      <div className={styles["right-side"]}>
        <Carousel images={images} />
      </div>
    </div>
  );
}
