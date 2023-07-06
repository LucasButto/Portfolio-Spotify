import React from "react";
import { useParams } from "react-router-dom";
import { useViewTransitionNavigation } from "../Hooks/useViewTransitionNavigation";

import { ProjectList } from "../Helpers/ProjectList";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import "../Styles/ProjectDisplay.css";
import "../Styles/LogosHover.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  const { viewNavigate } = useViewTransitionNavigation();

  const goBack = () => {
    viewNavigate(-1);
  };

  const nextProject = () => {
    viewNavigate("/project/" + (Number(id) + 1));
  };

  const checkButton = () => {
    const lastId = ProjectList.length - 1;
    if (id === lastId.toString()) {
      return "goBack-button disabled-button ";
    } else {
      return "goBack-button";
    }
  };

  return (
    <div className="project">
      <div className="goButtons-container">
        <button className="goBack-button" onClick={goBack}>
          <ChevronLeftRoundedIcon />
        </button>
        <button className={checkButton()} onClick={nextProject}>
          <ChevronRightRoundedIcon />
        </button>
      </div>
      <div className="img-title-container">
        <img src={project.image} alt="Project img" />
        <div className="title-links">
          <h3> {project.name}</h3>
          <div className="links-containers">
            {Boolean(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                title="Visit the repository"
              >
                <GitHubIcon />
              </a>
            )}

            {Boolean(project.link) && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                title="Go to the site"
              >
                <LaunchIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      {Boolean(project.skills) && (
        <div className="skills-container">
          <h3>Skills used:</h3>
          <hr />
          <div className="skills-list">
            {project.skills.map((skill, index) => (
              <ul key={index}>
                <li className={project.styles[index] + " skill"}>
                  <p>{index + 1}</p>
                  <p>{skill}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
