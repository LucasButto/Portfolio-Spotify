import { SkillsList } from "../Helpers/SkillsList";

import "../Styles/Skills.css";
import SkillsContainer from "./SkillsContainer";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skillsList">
          {SkillsList.map((item, index) => {
            return (
              <SkillsContainer
                title={item.title}
                skills={item.items}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
