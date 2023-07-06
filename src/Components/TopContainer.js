import React from "react";

import "../Styles/TopContainer.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import VerifiedIcon from "@mui/icons-material/Verified";

const TopContainer = () => {
  return (
    <>
      <div className="top-container">
        <div className="info">
          <div className="verified-p-container">
            <VerifiedIcon />
            <p>Front-End developer</p>
          </div>
          <h1>Lucas Butto</h1>
          <div className="links">
            <a
              className="link"
              href="https://github.com/LucasButto"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              <span>GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-butto-8a43a724b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              <span>LINKEDIN</span>
            </a>
            <a
              href="mailto:lbutto40@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
              <span>EMAIL</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContainer;
