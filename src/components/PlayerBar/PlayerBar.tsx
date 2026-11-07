import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LaunchIcon from "@mui/icons-material/Launch";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import { useState } from "react";

import { profile } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import { usePlayer } from "@/hooks/usePlayer";
import { projectName } from "@/utils/project";
import "./PlayerBar.scss";

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
};

const PlayerBar = () => {
  const {
    currentProject,
    isPlaying,
    elapsed,
    trackLength,
    togglePlay,
    playNext,
    playPrevious,
    openDetail,
  } = usePlayer();
  const { copy, tr, locale } = useI18n();

  const [liked, setLiked] = useState(false);

  const progress = (elapsed / trackLength) * 100;
  const cover = currentProject?.image ?? profile.avatar;
  const title = currentProject
    ? projectName(currentProject, locale)
    : profile.name;
  const subtitle = currentProject
    ? tr(currentProject.subtitle)
    : tr(profile.role);

  return (
    <footer className="player-bar">
      <div className="player-bar__track">
        <div className="player-bar__cover">
          <img
            src={cover}
            alt=""
            style={{
              objectPosition: currentProject?.alignImage ?? "center",
            }}
          />
          {isPlaying && (
            <span className="player-bar__equalizer" aria-hidden="true">
              {[0, 1, 2, 3].map((bar) => (
                <span
                  key={bar}
                  className="player-bar__eq-bar"
                  style={{ animationDelay: `${bar * 0.15}s` }}
                />
              ))}
            </span>
          )}
        </div>

        <div className="player-bar__info">
          {currentProject ? (
            <button
              type="button"
              className="player-bar__title player-bar__title--link"
              onClick={() => openDetail(currentProject)}
              title={copy.player.openDetails}
            >
              {title}
            </button>
          ) : (
            <span className="player-bar__title">{title}</span>
          )}
          <span className="player-bar__subtitle">{subtitle}</span>
        </div>

        <button
          type="button"
          className={`player-bar__like${liked ? " player-bar__like--on" : ""}`}
          onClick={() => setLiked((value) => !value)}
          aria-label={liked ? copy.player.unlike : copy.player.like}
        >
          {liked ? (
            <FavoriteRoundedIcon aria-hidden="true" />
          ) : (
            <FavoriteBorderRoundedIcon aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="player-bar__center">
        <div className="player-bar__controls">
          <button
            type="button"
            className="player-bar__ghost player-bar__ghost--wide"
            aria-label={copy.player.shuffle}
            disabled
          >
            <ShuffleRoundedIcon aria-hidden="true" />
          </button>

          <button
            type="button"
            className="player-bar__ghost"
            onClick={playPrevious}
            aria-label={copy.player.previous}
          >
            <SkipPreviousRoundedIcon aria-hidden="true" />
          </button>

          <button
            type="button"
            className="player-bar__main"
            onClick={togglePlay}
            aria-label={isPlaying ? copy.player.pause : copy.player.play}
          >
            {isPlaying ? (
              <PauseRoundedIcon aria-hidden="true" />
            ) : (
              <PlayArrowRoundedIcon aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            className="player-bar__ghost"
            onClick={playNext}
            aria-label={copy.player.next}
          >
            <SkipNextRoundedIcon aria-hidden="true" />
          </button>

          <button
            type="button"
            className="player-bar__ghost player-bar__ghost--wide"
            aria-label={copy.player.repeat}
            disabled
          >
            <RepeatRoundedIcon aria-hidden="true" />
          </button>
        </div>

        <div className="player-bar__progress">
          <span className="player-bar__time">{formatTime(elapsed)}</span>
          <div className="player-bar__rail">
            <div
              className="player-bar__fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="player-bar__time">{formatTime(trackLength)}</span>
        </div>
      </div>

      <div className="player-bar__extra">
        {currentProject?.link && (
          <a
            className="player-bar__ghost"
            href={currentProject.link}
            target="_blank"
            rel="noreferrer"
            title={copy.player.visit(title)}
            aria-label={copy.player.visit(title)}
          >
            <LaunchIcon aria-hidden="true" />
          </a>
        )}

        <VolumeUpRoundedIcon
          className="player-bar__volume-icon"
          aria-hidden="true"
        />
        <div className="player-bar__volume">
          <div className="player-bar__volume-fill" />
        </div>
      </div>
    </footer>
  );
};

export default PlayerBar;
