import React from "react";
import { SkillsList } from "../Helpers/SkillsList";

import "../Styles/Skills.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

const Skills = () => {
  const initialValues = [true, true, true, true, true];
  console.log(SkillsList);

  return (
    <>
      <div className="skills">
        <ul className="list">
          <li className="item">
            <div className="button-title">
              <button>
                {initialValues[0] ? (
                  <PauseCircleFilledIcon />
                ) : (
                  <PlayCircleFilledIcon />
                )}
              </button>
              <h3> Front-End </h3>
            </div>
            {initialValues[0] ? (
              <span>- HTML, CSS, JavaScript, ReactJS, NPM, BootStrap.</span>
            ) : (
              <span></span>
            )}
          </li>

          <li className="item">
            <div className="button-title">
              <button>
                {initialValues[1] ? (
                  <PauseCircleFilledIcon />
                ) : (
                  <PlayCircleFilledIcon />
                )}
              </button>
              <h3>Back-End</h3>
            </div>
            {initialValues[1] ? <span>- .NET, MySQL</span> : <span></span>}
          </li>

          <li className="item">
            <div className="button-title">
              <button>
                {initialValues[2] ? (
                  <PauseCircleFilledIcon />
                ) : (
                  <PlayCircleFilledIcon />
                )}
              </button>
              <h3>Programming Languages</h3>
            </div>
            {initialValues[2] ? (
              <span>- JavaScript, Python, C#, C</span>
            ) : (
              <span></span>
            )}
          </li>

          <li className="item">
            <div className="button-title">
              <button>
                {initialValues[3] ? (
                  <PauseCircleFilledIcon />
                ) : (
                  <PlayCircleFilledIcon />
                )}
              </button>
              <h3>Tools</h3>
            </div>
            {initialValues[3] ? (
              <span>- Git, GitHub, Visual Studio 2022, Visual Studio Code</span>
            ) : (
              <span></span>
            )}
          </li>

          <li className="item">
            <div className="button-title">
              <button>
                {initialValues[4] ? (
                  <PauseCircleFilledIcon />
                ) : (
                  <PlayCircleFilledIcon />
                )}
              </button>
              <h3>Languajes</h3>
            </div>
            {initialValues[4] ? (
              <span>- Spanish, English, Italian</span>
            ) : (
              <span></span>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
