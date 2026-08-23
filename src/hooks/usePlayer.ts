import { useContext } from "react";
import { PlayerContext } from "@/context/playerContext";
import type { PlayerContextValue } from "@/context/playerContext";

export const usePlayer = (): PlayerContextValue => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used inside a <PlayerProvider>");
  }

  return context;
};
