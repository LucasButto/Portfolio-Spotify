import React from "react";
import { ProjectList } from "../Helpers/ProjectList";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import "../Styles/About.css";

const About = () => {
  const lastestProject = ProjectList[ProjectList.length - 2];

  return (
    <div className="articles-containers">
      <article>
        <h3>About Me</h3>
        <p>
          I'm a 23-year-old Argentine Front-End developer who loves creating
          dynamic web apps with React. Currently studying programming at the
          National Technological University of Rosario. When not coding, I enjoy
          hanging out with friends and exercising. I design and implement
          user-friendly interfaces to create efficient and visually appealing
          apps that improve the user experience.
        </p>
      </article>
      <article>
        <h3>Lastest Project</h3>
        <div className="lastest-project-container">
          <div className="img-container">
            <img src={lastestProject.image} alt="Project img" />
          </div>
          <div className="right-container">
            <p>{lastestProject.description}</p>
            <div className="links">
              {Boolean(lastestProject.github) && (
                <a
                  href={lastestProject.github}
                  target="_blank"
                  rel="noreferrer"
                  title="Visit the repository"
                >
                  <GitHubIcon />
                  <span>GITHUB</span>
                </a>
              )}

              {Boolean(lastestProject.link) && (
                <a
                  href={lastestProject.link}
                  target="_blank"
                  rel="noreferrer"
                  title="Go to the site"
                >
                  <LaunchIcon />
                  <span>SITE</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
