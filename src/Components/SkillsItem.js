import React from "react";

import "../Styles/SkillsItem.css";

const SkillsItem = ({
  title,
  image,
}) => {
  return (
    <>
      <div className="skillItem">
        <div className="skillImg-container">
          <img src={image} alt="skill img" className="skillImg" />
        </div>
        <h1 className="skillTitle"> {title} </h1>
      </div>
    </>
  );
};

export default SkillsItem;
