import { useState, createContext, useEffect } from "react";

const PathContext = createContext();

const PathProvider = ({ children }) => {
  const currentPath = window.location.pathname;
  const [aboutStyles, setAboutStyles] = useState("link-home");
  const [skillsStyles, setSkillsStyles] = useState("link-home");

  useEffect(() => {
    if (currentPath === "/") {
      setAboutStyles("current link-home");
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

  return (
    <PathContext.Provider
      value={{
        aboutStyles,
        skillsStyles,
        aboutClickHandler,
        skillsClickHandler,
      }}
    >
      {children}
    </PathContext.Provider>
  );
};

export { PathProvider };
export default PathContext;
