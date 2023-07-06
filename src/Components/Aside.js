import React from "react";

import { useViewTransitionNavigation } from "../Hooks/useViewTransitionNavigation";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

import "../Styles/Aside.css";

const Aside = () => {
  const currentPath = window.location.pathname;
  const { viewNavigate } = useViewTransitionNavigation();

  const checkPath = (path) => {
    if (currentPath === "/" && path === "/home") {
      return "current-nav top-link";
    } else if (
      (currentPath === "/about" || currentPath === "/skills") &&
      path === "/home"
    ) {
      return "current-nav top-link";
    } else if (currentPath.startsWith("/project/") && path === "/projects") {
      return "current-nav top-link";
    } else if (currentPath === path) {
      return "current-nav top-link";
    } else {
      return "top-link";
    }
  };

  return (
    <>
      <aside className="aside">
        <h2>Portfolio</h2>
        <hr />
        <nav className="nav">
          <ul>
            <li>
              <div
                onClick={() => {
                  viewNavigate("/home");
                }}
              >
                <div className={checkPath("/home")}>
                  <HomeRoundedIcon />
                  <span>Home</span>
                </div>
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  viewNavigate("/projects");
                }}
              >
                <div className={checkPath("/projects")}>
                  <CodeRoundedIcon />
                  <span>Projects</span>
                </div>
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  viewNavigate("/experience");
                }}
              >
                <div className={checkPath("/experience")}>
                  <WorkRoundedIcon />
                  <span>Experience</span>
                </div>
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  viewNavigate("/contact");
                }}
              >
                <div className={checkPath("/contact")}>
                  <AlternateEmailRoundedIcon />
                  <span>Contact</span>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
