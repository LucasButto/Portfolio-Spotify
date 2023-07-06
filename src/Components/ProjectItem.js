import React from "react";
import { useViewTransitionNavigation } from "../Hooks/useViewTransitionNavigation";
import "../Styles/ProjectItem.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const ProjectItem = ({ image, name, id }) => {
  const { viewNavigate } = useViewTransitionNavigation();
  const navigateToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    viewNavigate("/project/" + id);
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
