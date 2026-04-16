import { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <PlayerContext.Provider value={{ currentProject, setCurrentProject }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
