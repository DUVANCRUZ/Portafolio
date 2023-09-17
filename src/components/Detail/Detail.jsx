import React from "react";
import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import projects from "../../projects.json";
import Carousel from "../Carousel/Carousel";
import Technologies from "../Technologies/Technologies";

export default function Detail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return <div>No se encontró el proyecto.</div>;
  }

  const images = [];
  project.images.map((imageName) => {
    let ruta = require(`../../assets/Images/${project.numero}/${imageName}`);
    images.push(ruta);
  });
  console.log(images);

  return (
    <div className={styles.container}>
      <h1>{project.name}</h1>
      <div>
        <Carousel images={images} />
      </div>
      <Technologies technologyNames={project.technologies} />
      <h1>Description</h1>
      <p>{project.description}</p>
      {/* Pasa las tecnologías como props al componente Technologies */}
      <p>
        GitHub: <a href={project.githubLink}>{project.githubLink}</a>
      </p>
      <p>
        Deploy: <a href={project.deployLink}>{project.deployLink}</a>
      </p>
    </div>
  );
}
