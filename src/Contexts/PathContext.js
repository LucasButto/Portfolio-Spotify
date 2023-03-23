import { useState, createContext, useEffect } from "react";

const PathContext = createContext();

const PathProvider = ({ children }) => {
  const currentPath = window.location.pathname;
  const [aboutStyles, setAboutStyles] = useState("link-home");
  const [skillsStyles, setSkillsStyles] = useState("link-home");
  const [homeStyles, setHomeStyles] = useState("link");
  const [projectsStyles, setProjectsStyles] = useState("link");
  const [experienceStyles, setExperienceStyles] = useState("link");
  const [contactStyles, setContactStyles] = useState("link");

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
    setHomeStyles("link");
    setProjectsStyles("link");
    setExperienceStyles("link");
    setContactStyles("link");
  };

  const aboutClickHandler = () => {
    navigateToTop();
    setAboutStyles("current link-home");
    setSkillsStyles("link-home");
    setHomeStyles("current-nav link");
  };

  const skillsClickHandler = () => {
    navigateToTop();
    setAboutStyles("link-home");
    setSkillsStyles("current link-home");
    setHomeStyles("current-nav link");
  };

  const homeClickHandler = () => {
    clearStyles();
    aboutClickHandler();
    setHomeStyles("current-nav link");
  };

  const projectsClickHandler = () => {
    clearStyles();
    setProjectsStyles("current-nav link");
  };

  const experienceClickHandler = () => {
    clearStyles();
    setExperienceStyles("current-nav link");
  };

  const contactClickHandler = () => {
    clearStyles();
    setContactStyles("current-nav link");
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
