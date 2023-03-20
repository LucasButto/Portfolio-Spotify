import React, { useState } from "react";
import { SkillsList } from "../Helpers/SkillsList";

import "../Styles/Skills.css";

import SkillsItem from "./SkillsItem";

const Skills = () => {
  const [shownItem, setShownItem] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const changeViewHandler = (id) => {
    let newShownItem = [...shownItem];
    newShownItem[id] = !newShownItem[id];
    setShownItem(newShownItem);
  };

  return (
    <>
      <div className="skills">
        <ul className="list">
          {SkillsList.map((item, index) => {
            return (
              <>
                <SkillsItem
                  shownItem={shownItem}
                  changeViewHandler={changeViewHandler}
                  id={index}
                  title={item.title}
                  skills={item.skills}
                  image={item.image}
                />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Skills;
