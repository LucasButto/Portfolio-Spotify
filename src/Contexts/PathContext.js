import { useState, createContext, useEffect } from "react";

const PathContext = createContext();

const PathProvider = ({ children }) => {
  const currentPath = window.location.pathname;
  const [aboutStyles, setAboutStyles] = useState("link-home");
  const [skillsStyles, setSkillsStyles] = useState("link-home");
  const [homeStyles, setHomeStyles] = useState("top-link");
  const [projectsStyles, setProjectsStyles] = useState("top-link");
  const [experienceStyles, setExperienceStyles] = useState("top-link");
  const [contactStyles, setContactStyles] = useState("top-link");

  useEffect(() => {
    if (currentPath === "/") homeClickHandler();
    if (currentPath === "/home") homeClickHandler();
    if (currentPath === "/about") aboutClickHandler();
    if (currentPath === "/skills") skillsClickHandler();
    if (currentPath === "/projects") projectsClickHandler();
    if (currentPath === "/experience") experienceClickHandler();
    if (currentPath === "/contact") contactClickHandler();
  }, []);

  const navigateToTop = () => {
    window.scrollTo(0, 0);
  };

  const clearStyles = () => {
    navigateToTop();
    setHomeStyles("top-link");
    setProjectsStyles("top-link");
    setExperienceStyles("top-link");
    setContactStyles("top-link");
  };

  const aboutClickHandler = () => {
    navigateToTop();
    setAboutStyles("current link-home");
    setSkillsStyles("link-home");
    setHomeStyles("current-nav top-link");
  };

  const skillsClickHandler = () => {
    navigateToTop();
    setAboutStyles("link-home");
    setSkillsStyles("current link-home");
    setHomeStyles("current-nav top-link");
  };

  const homeClickHandler = () => {
    clearStyles();
    aboutClickHandler();
    setHomeStyles("current-nav top-link");
  };

  const projectsClickHandler = () => {
    clearStyles();
    setProjectsStyles("current-nav top-link");
  };

  const experienceClickHandler = () => {
    clearStyles();
    setExperienceStyles("current-nav top-link");
  };

  const contactClickHandler = () => {
    clearStyles();
    setContactStyles("current-nav top-link");
  };

  return (
    <PathContext.Provider
      value={{
        aboutStyles,
        aboutClickHandler,
        skillsStyles,
        skillsClickHandler,
        homeStyles,
        homeClickHandler,
        projectsStyles,
        projectsClickHandler,
        experienceStyles,
        experienceClickHandler,
        contactStyles,
        contactClickHandler,
      }}
    >
      {children}
    </PathContext.Provider>
  );
};

export { PathProvider };
export default PathContext;
