import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import SocialButton from "@/components/SocialButton/SocialButton";
import { useI18n } from "@/hooks/useI18n";
import { usePlayer } from "@/hooks/usePlayer";
import { projectName } from "@/utils/project";
import "./ProjectModal.scss";

const ProjectModal = () => {
  const { detailProject, closeDetail } = usePlayer();
  const { copy, tr, locale } = useI18n();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!detailProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDetail();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [detailProject, closeDetail]);

  if (!detailProject) return null;

  const name = projectName(detailProject, locale);

  return (
    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDetail();
      }}
    >
      <div
        className="project-modal__panel custom-scroll"
        style={
          {
            "--accent": detailProject.accent,
          } as CSSProperties
        }
      >
        <button
          type="button"
          className="project-modal__close"
          onClick={closeDetail}
          ref={closeRef}
          aria-label={copy.modal.close}
        >
          <CloseRoundedIcon aria-hidden="true" />
        </button>

        <div className="project-modal__header">
          <img
            className="project-modal__cover"
            src={detailProject.image}
            alt={copy.modal.preview(name)}
            style={{ objectPosition: detailProject.alignImage ?? "center" }}
          />

          <div className="project-modal__intro">
            <p className="project-modal__eyebrow">{copy.modal.eyebrow}</p>
            <h2 className="project-modal__title" id="project-modal-title">
              {name}
            </h2>
            <p className="project-modal__subtitle">
              {tr(detailProject.subtitle)}
            </p>

            <div className="project-modal__links">
              {detailProject.github && (
                <SocialButton
                  href={detailProject.github}
                  title={copy.modal.visitRepository}
                  label={copy.modal.repository}
                  icon={<GitHubIcon />}
                />
              )}
              {detailProject.link && (
                <SocialButton
                  href={detailProject.link}
                  title={copy.modal.goToSite}
                  label={copy.modal.site}
                  icon={<LaunchIcon />}
                  variant="solid"
                />
              )}
            </div>
          </div>
        </div>

        {detailProject.description && (
          <p className="project-modal__description">
            {tr(detailProject.description)}
          </p>
        )}

        {detailProject.skills && (
          <div className="project-modal__skills">
            <h3 className="project-modal__skills-title">
              {copy.modal.skillsUsed}
            </h3>
            <ul className="project-modal__skills-list">
              {detailProject.skills.map((skill, index) => (
                <li className="project-modal__skill" key={skill}>
                  <span className="project-modal__skill-index">
                    {index + 1}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
