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
          Hi there, I'm a 23 year old Front-End developer from Argentina with a
          passion for building dynamic web applications using React. I'm
          currently studying programming at the National Technological
          University of Rosario to further enhance my skills and knowledge in
          the field. When I'm not working on a new project, you can find me
          hanging out with friends or staying active by doing exercise. With
          experience in designing and implementing user-friendly interfaces, I'm
          dedicated to creating efficient and visually appealing applications
          that enhance the user experience.
        </p>
      </article>
      <article>
        <h3>Lastest Project</h3>
        <div className="lastest-project-container">
          <img src={lastestProject.image} alt="Project img" />
          <div className="right-container">
            <p>
              This is a React-based game project where you have to guess the
              name of a Pokémon from its silhouette. The project comes with
              custom settings where you can choose the regions you want to play
              with and it saves your best score in localstorage.
            </p>
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
