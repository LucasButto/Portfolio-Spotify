import { createContext } from "react";
import type { Project } from "@/types/portfolio";

export interface PlayerContextValue {
  /** Project currently "playing" in the bottom bar. */
  currentProject: Project | null;
  isPlaying: boolean;
  /** Elapsed seconds of the fake track. */
  elapsed: number;
  trackLength: number;
  playProject: (project: Project) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  /** Project shown inside the detail modal. */
  detailProject: Project | null;
  openDetail: (project: Project) => void;
  closeDetail: () => void;
}

export const PlayerContext = createContext<PlayerContextValue | null>(null);
