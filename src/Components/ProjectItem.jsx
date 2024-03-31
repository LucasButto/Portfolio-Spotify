import PropTypes from "prop-types";
import { useViewTransitionNavigation } from "../Hooks/useViewTransitionNavigation";
import "../Styles/ProjectItem.css";

import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";

const ProjectItem = ({ image, name, id }) => {
  const { viewNavigate } = useViewTransitionNavigation();
  return (
    <div className="projectItem" onClick={() => viewNavigate("/project/" + id)}>
      <div className="projectImg-container">
        <img src={image} alt="project img" className="projectImg" />
        <div className="play-btn">
          <PlayCircleRoundedIcon />
        </div>
      </div>
      <h1 className="projectTitle"> {name} </h1>
    </div>
  );
};

ProjectItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProjectItem;
