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
        <h3>About This Website</h3>
        <p>
          The design of this website was inspired by <span>Spotify</span>. I
          have always admired Spotify's UI/UX design, and most of the time when
          I am programming, I am using the platform. Music plays a huge role in
          my life as a developer, and with Spotify being such an inspiring tech
          company, this design seemed very fitting.
        </p>
      </article>
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
          <img src={lastestProject.image} alt="Project img" />
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
                  <span>GITHUB</span> <GitHubIcon />
                </a>
              )}

              {Boolean(lastestProject.link) && (
                <a
                  href={lastestProject.link}
                  target="_blank"
                  rel="noreferrer"
                  title="Go to the site"
                >
                  <span>SITE</span>
                  <LaunchIcon />
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
