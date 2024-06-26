import PropTypes from "prop-types";
import SkillsItem from "./SkillsItem";

import "../Styles/SkillsContainer.css";

const SkillsContainer = ({ title, skills }) => {
  return (
    <div className="main-skills-container">
      <h3>{title}</h3>
      <div className="mapped-skills">
        {skills.map((item, index) => {
          return (
            <SkillsItem
              key={index}
              title={item.title}
              image={item.image}
              styles={item.styles}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

SkillsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default SkillsContainer;
