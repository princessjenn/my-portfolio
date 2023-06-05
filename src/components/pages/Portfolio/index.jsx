import React from "react";
import projects from "../../projectData";

export default function Portfolio() {
  return (
    <section className="portfolio-Section">
      <header className="portfolio-Header">
        <h1>Jennifer Eckenrode Portfolio</h1>
      </header>

      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div>
            <img src={project.image} alt={project.name} />
          </div>
        </div>
      ))}
    </section>
  );
}
