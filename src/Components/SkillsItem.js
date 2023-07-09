import React from "react";

import "../Styles/SkillsItem.css";
import "../Styles/LogosHover.css";

const SkillsItem = ({ title, image, styles, link }) => {
  return (
    <>
      <a className={styles} href={link} target="_blank" rel="noreferrer">
        <div className="skillImg-container">
          <img src={image} alt="skill img" className="skillImg" />
        </div>
        <h1 className="skillTitle"> {title} </h1>
      </a>
    </>
  );
};

export default SkillsItem;
