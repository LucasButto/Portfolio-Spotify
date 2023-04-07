import React from "react";
import { SkillsList } from "../Helpers/SkillsList";

import "../Styles/Skills.css";
import SkillsContainer from "./SkillsContainer";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skillsList">
          {SkillsList.map((item) => {
            return <SkillsContainer title={item.title} skills={item.items} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
