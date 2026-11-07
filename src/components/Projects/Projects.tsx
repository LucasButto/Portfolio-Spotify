import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useState } from "react";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { projects } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import { usePlayer } from "@/hooks/usePlayer";
import { projectName } from "@/utils/project";
import "./Projects.scss";

/** How many cards show before the mobile-only "Show more" button. */
const MOBILE_PREVIEW_COUNT = 3;

const Projects = () => {
  const { currentProject, isPlaying, playProject, togglePlay, openDetail } =
    usePlayer();
  const { copy, tr, locale } = useI18n();
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <SectionHeader
        id="projects-title"
        title={copy.projects.title}
        hint={copy.projects.hint}
      />

      <ul
        className={`projects__grid${expanded ? " projects__grid--expanded" : ""}`}
      >
        {projects.map((project) => {
          const isCurrent = currentProject?.id === project.id;
          const isTrackPlaying = isCurrent && isPlaying;
          const name = projectName(project, locale);

          return (
            <li className="projects__card" key={project.id}>
              <div className="projects__cover">
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: project.alignImage ?? "center" }}
                />

                {!project.comingSoon && (
                  <button
                    type="button"
                    className={`projects__play${
                      isCurrent ? " projects__play--visible" : ""
                    }`}
                    onClick={() =>
                      isCurrent ? togglePlay() : playProject(project)
                    }
                    aria-label={
                      isTrackPlaying
                        ? copy.projects.pause(name)
                        : copy.projects.play(name)
                    }
                  >
                    {isTrackPlaying ? (
                      <PauseRoundedIcon aria-hidden="true" />
                    ) : (
                      <PlayArrowRoundedIcon aria-hidden="true" />
                    )}
                  </button>
                )}
              </div>

              <div className="projects__info">
                <h3 className="projects__name">{name}</h3>
                <p className="projects__subtitle">{tr(project.subtitle)}</p>

                {project.skills && (
                  <ul className="projects__tags">
                    {project.skills.slice(0, 3).map((skill) => (
                      <li className="projects__tag" key={skill}>
                        {skill}
                      </li>
                    ))}
                    {project.skills.length > 3 && (
                      <li className="projects__tag">
                        +{project.skills.length - 3}
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <button
                type="button"
                className="projects__overlay"
                onClick={() => openDetail(project)}
              >
                <span className="sr-only">{copy.projects.openDetails(name)}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {!expanded && projects.length > MOBILE_PREVIEW_COUNT && (
        <button
          type="button"
          className="projects__more"
          onClick={() => setExpanded(true)}
        >
          {copy.projects.showMore}
        </button>
      )}
    </section>
  );
};

export default Projects;
