import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PathContext from "../Contexts/PathContext";

import "../Styles/NavHome.css";

const NavHome = () => {
  const { aboutClickHandler, skillsClickHandler, aboutStyles, skillsStyles } =
    useContext(PathContext);
  return (
    <nav className="nav-home">
      <ul>
        <li>
          <Link to="/about" className={aboutStyles} onClick={aboutClickHandler}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={skillsStyles}
            onClick={skillsClickHandler}
          >
            SKILLS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavHome;
