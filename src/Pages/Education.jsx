import React, { useState } from "react";
import ExperienceItem from "../Components/ExperienceItem";
import { EducationList } from "../Helpers/EducationList";

import "../Styles/Experience.css";

export default function EducationPage() {
  const educationList = EducationList;
  const arrLen = Object.values(educationList).length;
  const initialValues = new Array(arrLen).fill(false);
  const [shownItem, setShownItem] = useState(initialValues);

  const changeViewHandler = (id) => {
    let newShownItem = [...shownItem];
    newShownItem[id] = !newShownItem[id];
    setShownItem(newShownItem);
  };
  return (
    <>
      <h2 className="projectsTitle">EDUCATION</h2>
      <div className="experience">
        <ul className="list">
          {EducationList.map((item, index) => {
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
}
