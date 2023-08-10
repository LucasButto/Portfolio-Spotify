import React, { useState } from "react";
import ExperienceItem from "../Components/ExperienceItem";
import { ExperienceList } from "../Helpers/ExperienceList";

import "../Styles/Experience.css";

const Experience = () => {
  const experienceList = ExperienceList;
  const arrLen = Object.values(experienceList).length;
  const initialValues = new Array(arrLen).fill(false);
  const [shownItem, setShownItem] = useState(initialValues);

  const changeViewHandler = (id) => {
    let newShownItem = [...shownItem];
    newShownItem[id] = !newShownItem[id];
    setShownItem(newShownItem);
  };
  return (
    <>
      <h2 className="projectsTitle">EXPERIENCE</h2>
      <div className="experience">
        <ul className="list">
          {ExperienceList.map((item, index) => {
            return (
              <ExperienceItem
                key={index}
                id={index}
                shownItem={shownItem}
                changeViewHandler={changeViewHandler}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Experience;
