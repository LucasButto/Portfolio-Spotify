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
          Fullstack developer with experience in migration, maintenance and
          optimization of websites to Next.js, focused on improving performance
          and scalability. Currently, at AMR Mutual, I work in the development
          and maintenance of functionalities in both frontend (Next.js) and
          backend (.NET), optimizing user experience and system efficiency. I
          also participate in the migration of databases from Adabas to SQL
          Server, creating new classes and views to integrate data into the
          platform.
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
