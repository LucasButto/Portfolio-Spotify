import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { shippedProjects } from "@/data";
import type { Project } from "@/types/portfolio";
import { PlayerContext } from "./playerContext";
import type { PlayerContextValue } from "./playerContext";

/** Length of the fake track behind the progress bar (3:34, Spotify style). */
const TRACK_LENGTH = 214;

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [detailProject, setDetailProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const id = window.setInterval(() => {
      setElapsed((value) => (value >= TRACK_LENGTH ? 0 : value + 1));
    }, 1000);

    return () => window.clearInterval(id);
  }, [isPlaying]);

  const playProject = useCallback((project: Project) => {
    setCurrentProject(project);
    setElapsed(0);
    setIsPlaying(true);
  }, []);

  const togglePlay = useCallback(() => {
    if (!currentProject) {
      playProject(shippedProjects[0]);
      return;
    }
    setIsPlaying((value) => !value);
  }, [currentProject, playProject]);

  const step = useCallback(
    (direction: 1 | -1) => {
      if (!currentProject) {
        playProject(shippedProjects[0]);
        return;
      }

      const index = shippedProjects.findIndex(
        (project) => project.id === currentProject.id,
      );
      const nextIndex =
        (index + direction + shippedProjects.length) % shippedProjects.length;

      playProject(shippedProjects[nextIndex]);
    },
    [currentProject, playProject],
  );

  const playNext = useCallback(() => step(1), [step]);
  const playPrevious = useCallback(() => step(-1), [step]);

  const openDetail = useCallback(
    (project: Project) => {
      setDetailProject(project);
      if (!project.comingSoon) playProject(project);
    },
    [playProject],
  );

  const closeDetail = useCallback(() => setDetailProject(null), []);

  const value = useMemo<PlayerContextValue>(
    () => ({
      currentProject,
      isPlaying,
      elapsed,
      trackLength: TRACK_LENGTH,
      playProject,
      togglePlay,
      playNext,
      playPrevious,
      detailProject,
      openDetail,
      closeDetail,
    }),
    [
      currentProject,
      isPlaying,
      elapsed,
      playProject,
      togglePlay,
      playNext,
      playPrevious,
      detailProject,
      openDetail,
      closeDetail,
    ],
  );

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
