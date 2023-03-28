import React from "react";
import { SkillsList } from "../Helpers/SkillsList";

import "../Styles/Skills.css";

import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skillsList">
          {SkillsList.map((item) => {
            return (
              <SkillsItem
                title={item.title}
                image={item.image}
                styles={item.styles}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
