import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/NavHome.css";

const NavHome = () => {
  const [changePath, setChangePath] = useState(false);
  const currentPath = window.location.pathname;
  const [aboutStyles, setAboutStyles] = useState("link-home");
  const [skillsStyles, setSkillsStyles] = useState("link-home");

  useEffect(() => {
    if (
      currentPath === "/" ||
      currentPath === "/home" ||
      currentPath === "/about"
    ) {
      setAboutStyles("current link-home");
      setSkillsStyles("link-home");
    }

    if (currentPath === "/skills") {
      setAboutStyles("link-home");
      setSkillsStyles("current link-home");
    }
  }, [changePath, currentPath]);

  const changePathHandler = () => {
    setChangePath(!changePath);
  };

  return (
    <nav className="nav-home">
      <ul>
        <li>
          <Link to="/about" className={aboutStyles} onClick={changePathHandler}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={skillsStyles}
            onClick={changePathHandler}
          >
            SKILLS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavHome;
