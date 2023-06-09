import React from "react";
import projects from "../../projectData";

export default function Portfolio() {
  return (
    <div className="container mx-auto my-12 px-4 md:px-12">
      <div className="-mx-1 flex flex-wrap lg:-mx-4 justify-center space-x-4">
        {projects.map((project, index) => {
          console.log(project.image); //image path
          return (
            <div
              key={index}
              className="border-outline my-1 w-full rounded border border-info p-5 px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4 bg-neutral text-info"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
              }}
            >
              <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                <h1 className="justify-between p-2.5 text-lg">
                  <span className="text-primary text-lg">{project.name}</span>
                </h1>
                <p className="text-grey-darker text-sm">
                  {project.description}
                </p>
              </header>

              <footer className="flex items-center justify-center p-2 leading-none md:p-4">
                <div className="join">
                  <a className="join-item btn btn-outline btn-accent" href={project.repoLink}>
                    Repository
                  </a>
                  <a className="join-item btn btn-outline btn-accent" href={project.deployLink}>
                    Deployed
                  </a>
                </div>
              </footer>
            </div>
          );
        })}
      </div>
    </div>
  );
}
