import { useState, createContext, useEffect } from "react";

const PathContext = createContext();

const PathProvider = ({ children }) => {
  const [aboutStyles, setAboutStyles] = useState("link-home");
  const [skillsStyles, setSkillsStyles] = useState("link-home");
  const [homeStyles, setHomeStyles] = useState("link");
  const [projectsStyles, setProjectsStyles] = useState("link");
  const [experienceStyles, setExperienceStyles] = useState("link");
  const [contactStyles, setContactStyles] = useState("link");

  useEffect(() => {
    homeClickHandler();
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
  };

  const skillsClickHandler = () => {
    navigateToTop();
    setAboutStyles("link-home");
    setSkillsStyles("current link-home");
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
