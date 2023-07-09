import React from "react";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

const ExperienceItem = ({
  shownItem,
  changeViewHandler,
  id,
  title,
  description,
  date,
}) => {
  return (
    <>
      <li
        className={shownItem[id] ? "item itemShow" : "item"}
        onClick={() => {
          changeViewHandler(id);
        }}
      >
        <div className="data">
          <div className="button-title">
            <button>
              {shownItem[id] ? (
                <PauseCircleFilledIcon />
              ) : (
                <PlayCircleFilledIcon />
              )}
            </button>
            <h3>
              {" "}
              <span className="experience-title">{title}</span> |{" "}
              <span className="experience-date">{date}</span>{" "}
            </h3>
          </div>
        </div>
        {shownItem[id] ? <span>{description}</span> : null}
      </li>
    </>
  );
};

export default ExperienceItem;
