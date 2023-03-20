import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ProjectList } from "../Helpers/ProjectList";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import "../Styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };

  return (
    <div className="project">
      <div className="goButtons-container">
        <button className="goBack-button" onClick={goBack}>
          <ChevronLeftRoundedIcon />
        </button>
        <button className="goBack-button disabled-button">
          <ChevronRightRoundedIcon />
        </button>
      </div>
      <div className="img-title-container">
        <img src={project.image} alt="Project img" />
        <h3> {project.name}</h3>
      </div>

      {Boolean(project.skills) && (
        <div className="skills-container">
          <h3>Skills used:</h3>
          <hr />
          {project.skills.map((skill, index) => (
            <div className="skills-list">
              <ul key={index}>
                <li>
                  <p className="skill">
                    {index + 1}
                    {skill}
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}

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
  );
};

export default ProjectDisplay;
