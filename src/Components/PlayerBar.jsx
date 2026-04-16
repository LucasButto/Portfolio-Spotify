import { usePlayer } from "../Hooks/PlayerContext";
import { ProjectList } from "../Helpers/ProjectList";
import { useViewTransitionNavigation } from "../Hooks/useViewTransitionNavigation";

import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";

import "../Styles/PlayerBar.css";

const PlayerBar = () => {
  const { currentProject, setCurrentProject } = usePlayer();
  const { viewNavigate } = useViewTransitionNavigation();

  const currentIndex = currentProject
    ? ProjectList.findIndex((p) => p.name === currentProject.name)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentProject(ProjectList[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < ProjectList.length - 1) {
      const next = ProjectList[currentIndex + 1];
      if (next.name !== "More In Progress") {
        setCurrentProject(next);
      }
    }
  };

  return (
    <div className="player-bar">
      <div className="player-left">
        {currentProject ? (
          <>
            <img src={currentProject.image} alt={currentProject.name} />
            <div className="player-info">
              <span className="player-name">{currentProject.name}</span>
              <span className="player-type">Project</span>
            </div>
          </>
        ) : (
          <div className="player-info">
            <span className="player-name player-name--empty">
              No project selected
            </span>
            <span className="player-type">Select a project to explore</span>
          </div>
        )}
      </div>
      <div className="player-center">
        <div className="player-controls">
          <button
            className="player-btn"
            onClick={handlePrev}
            disabled={!currentProject || currentIndex <= 0}
          >
            <SkipPreviousRoundedIcon />
          </button>
          <button
            className="player-btn player-btn-main"
            disabled={!currentProject}
          >
            {currentProject ? (
              <PauseCircleFilledRoundedIcon />
            ) : (
              <PlayCircleRoundedIcon />
            )}
          </button>
          <button
            className="player-btn"
            onClick={handleNext}
            disabled={
              !currentProject ||
              currentIndex >= ProjectList.length - 1 ||
              ProjectList[currentIndex + 1]?.name === "More In Progress"
            }
          >
            <SkipNextRoundedIcon />
          </button>
        </div>
        <div className="player-progress-container">
          <div className="player-progress-bar">
            <div className="player-progress-fill" />
          </div>
        </div>
      </div>
      <div className="player-right">
        {currentProject && (
          <button
            className="player-btn player-btn-portfolio"
            onClick={() => viewNavigate("/project/" + currentIndex)}
            title="Ver proyecto"
          >
            <FolderOpenRoundedIcon />
          </button>
        )}
        {currentProject?.link && (
          <a
            href={currentProject.link}
            target="_blank"
            rel="noreferrer"
            className="player-visit"
            title="Visit site"
          >
            <OpenInNewIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default PlayerBar;
