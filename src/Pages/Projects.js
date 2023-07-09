import React from "react";
import { ProjectList } from "../Helpers/ProjectList";
import ProjectItem from "../Components/ProjectItem";

import "../Styles/Projects.css";

const Projects = () => {
  return (
    <>
      <h2 className="projectsTitle">PROJECTS</h2>
      <div className="projects">
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem
                id={idx}
                name={project.name}
                image={project.image}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
