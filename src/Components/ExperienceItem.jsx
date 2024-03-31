import PropTypes from "prop-types";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";

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
                <PauseCircleFilledRoundedIcon />
              ) : (
                <PlayCircleRoundedIcon />
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

ExperienceItem.propTypes = {
  shownItem: PropTypes.array.isRequired,
  changeViewHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ExperienceItem;
