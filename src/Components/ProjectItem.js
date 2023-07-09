import React from "react";
import { useViewTransitionNavigation } from "../Hooks/useViewTransitionNavigation";
import "../Styles/ProjectItem.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const ProjectItem = ({ image, name, id }) => {
  const { viewNavigate } = useViewTransitionNavigation();
  return (
    <div className="projectItem" onClick={() => viewNavigate("/project/" + id)}>
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
