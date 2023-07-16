import React from "react";

import "../Styles/TopContainer.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import VerifiedIcon from "@mui/icons-material/Verified";
import SocialMediaButton from "./SocialMediaButton";

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
            <SocialMediaButton
              link="https://github.com/LucasButto"
              title="Visit my GitHub"
              icon={<GitHubIcon />}
              name="GITHUB"
            />
            <SocialMediaButton
              link={"https://www.linkedin.com/in/lucas-butto-8a43a724b/"}
              title="Check my Linkedin"
              icon={<LinkedInIcon />}
              name="LINKEDIN"
            />
            <SocialMediaButton
              link={"mailto:lbutto40@gmail.com"}
              title="Send me an email"
              icon={<EmailIcon />}
              name="EMAIL"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContainer;
