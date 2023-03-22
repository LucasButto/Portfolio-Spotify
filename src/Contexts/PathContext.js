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
    if (currentPath === "/") {
      setAboutStyles("current link-home");
      setHomeStyles("current link");
    }
  }, []);

  const aboutClickHandler = () => {
    setAboutStyles("current link-home");
    setSkillsStyles("link-home");
  };

  const skillsClickHandler = () => {
    setAboutStyles("link-home");
    setSkillsStyles("current link-home");
  };

  const homeClickHandler = () => {
    setHomeStyles("current-nav link");
    setProjectsStyles("link");
    setExperienceStyles("link");
    setContactStyles("link");
    aboutClickHandler();
  };

  const projectsClickHandler = () => {
    setHomeStyles("link");
    setProjectsStyles("current-nav link");
    setExperienceStyles("link");
    setContactStyles("link");
  };

  const experienceClickHandler = () => {
    setHomeStyles("link");
    setProjectsStyles("link");
    setExperienceStyles("current-nav link");
    setContactStyles("link");
  };

  const contactClickHandler = () => {
    setHomeStyles("link");
    setProjectsStyles("link");
    setExperienceStyles("link");
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
