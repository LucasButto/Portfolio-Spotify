import React from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/ProjectItem.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  const navigateToTop = () => {
    navigate("/project/" + id);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigateToTop();
      }}
    >
      <div className="projectImg-container">
        <img src={image} alt="project img" className="projectImg" />
        <div className="play-btn">
          <PlayCircleFilledIcon />
        </div>
      </div>
      <h1 className="projectTitle"> {name} </h1>
    </div>
  );
};

export default ProjectItem;
