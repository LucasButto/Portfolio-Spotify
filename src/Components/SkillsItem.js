import React from "react";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import VoidImage from "../Helpers/SkillsImgs/6.png";

import "../Styles/SkillsItem.css";

const SkillsItem = ({
  shownItem,
  changeViewHandler,
  id,
  title,
  skills,
  image,
}) => {
  return (
    <>
      <li className={shownItem[id] ? "item itemShow" : "item"}>
        <div className="data">
          <div className="button-title">
            <button
              onClick={() => {
                changeViewHandler(id);
              }}
            >
              {shownItem[id] ? (
                <PauseCircleFilledIcon />
              ) : (
                <PlayCircleFilledIcon />
              )}
            </button>
            <h3> {title} </h3>
          </div>
          <div className="img-container">
            {shownItem[id] ? (
              <img src={image} alt="skills img" className="skills-img show" />
            ) : (
              <img src={VoidImage} alt="skills void" className="skills-img" />
            )}
          </div>
        </div>
        {shownItem[id] ? <span>{skills}</span> : null}
      </li>
    </>
  );
};

export default SkillsItem;
