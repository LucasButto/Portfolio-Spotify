import React from "react";
import { useViewTransitionNavigation } from "../Hooks/useViewTransitionNavigation";
import "../Styles/NavHome.css";

const NavHome = () => {
  const currentPath = window.location.pathname;
  const { viewNavigate } = useViewTransitionNavigation();

  const checkPath = (path) => {
    if (
      (currentPath === "/home" && path === "/about") ||
      (currentPath === "/" && path === "/about")
    ) {
      return "current link-home";
    } else if (currentPath === path) {
      return "current link-home";
    } else {
      return "link-home";
    }
  };
  return (
    <nav className="nav-home">
      <ul>
        <li>
          <div
            className={checkPath("/about")}
            onClick={() => {
              viewNavigate("/about");
            }}
          >
            ABOUT
          </div>
        </li>
        <li>
          <div
            className={checkPath("/skills")}
            onClick={() => {
              viewNavigate("/skills");
            }}
          >
            SKILLS
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavHome;
