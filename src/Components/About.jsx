/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ProjectList } from "../Helpers/ProjectList";

import Modal from "./Modal";
import SocialMediaButton from "./SocialMediaButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import "../Styles/About.css";

const About = () => {
  const lastestProject = ProjectList[0];

  const [modal, setModal] = useState(false);

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
            <img
              src={lastestProject.image}
              alt="Project img"
              onClick={() => setModal(true)}
            />
          </div>
          <div className="right-container">
            <p>{lastestProject.description}</p>
            <div className="links">
              {Boolean(lastestProject.github) && (
                <SocialMediaButton
                  link={lastestProject.github}
                  title="Visit the repository"
                  icon={<GitHubIcon />}
                  name="GITHUB"
                />
              )}

              {Boolean(lastestProject.link) && (
                <SocialMediaButton
                  link={lastestProject.link}
                  title="Go to the site"
                  icon={<LaunchIcon />}
                  name="SITE"
                />
              )}
            </div>
          </div>
        </div>
      </article>
      {modal && (
        <Modal setModal={setModal}>
          <img src={lastestProject.image} alt="Project img" />
        </Modal>
      )}
    </div>
  );
};

export default About;
