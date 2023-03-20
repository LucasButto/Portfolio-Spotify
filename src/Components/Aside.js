import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PathContext from "../Contexts/PathContext";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

import "../Styles/Aside.css";

const Aside = () => {
  const { aboutClickHandler } = useContext(PathContext);
  return (
    <>
      <aside className="aside">
        <h2>Portfolio</h2>
        <hr />
        <nav className="nav">
          <ul>
            <li>
              <Link to="/home" onClick={aboutClickHandler}>
                <div className="link">
                  <HomeRoundedIcon />
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <div className="link">
                  <CodeRoundedIcon />
                  <span>Projects</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <div className="link">
                  <WorkRoundedIcon />
                  <span>Experience</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="link">
                  <AlternateEmailRoundedIcon />
                  <span>Contact</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
