import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import VerifiedIcon from "@mui/icons-material/Verified";
import type { SvgIconComponent } from "@mui/icons-material";

import SocialButton from "@/components/SocialButton/SocialButton";
import { careerStart, profile, shippedProjects, totalSkills } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import { usePlayer } from "@/hooks/usePlayer";
import type { SocialIcon } from "@/types/portfolio";
import { yearsSince } from "@/utils/date";
import { projectName } from "@/utils/project";
import "./Hero.scss";

const socialIcons: Record<SocialIcon, SvgIconComponent> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
  resume: DescriptionRoundedIcon,
};

const Hero = () => {
  const { currentProject, isPlaying, playProject, togglePlay } = usePlayer();
  const { copy, tr, locale } = useI18n();

  const featured = shippedProjects[0];
  /** Falls back to the featured project so the line keeps its height while idle. */
  const track = currentProject ?? featured;

  const handlePlay = () => {
    if (currentProject) {
      togglePlay();
      return;
    }
    playProject(featured);
  };

  return (
    <section className="hero" id="home" aria-label={copy.hero.label}>
      <div className="hero__banner">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="hero__content">
          <div
            className="hero__avatar"
            role="img"
            aria-label={copy.hero.photoOf(profile.name)}
            style={{ backgroundImage: `url(${profile.avatar})` }}
          />

          <div className="hero__text">
            {profile.verified && (
              <p className="hero__verified">
                <VerifiedIcon aria-hidden="true" />
                {copy.hero.verified}
              </p>
            )}

            <h1 className="hero__name">{profile.name}</h1>

            <p className="hero__meta">
              {tr(profile.role)} ·{" "}
              {copy.hero.meta(shippedProjects.length, totalSkills)} ·{" "}
              {copy.hero.experience(yearsSince(careerStart))}
            </p>
          </div>
        </div>
      </div>

      <div className="hero__actions">
        <div className="hero__buttons">
          <button
            type="button"
            className="hero__play"
            onClick={handlePlay}
            aria-label={
              isPlaying ? copy.hero.pauseCurrent : copy.hero.playLatest
            }
            title={isPlaying ? copy.hero.pause : copy.hero.playLatest}
          >
            {isPlaying ? (
              <PauseRoundedIcon aria-hidden="true" />
            ) : (
              <PlayArrowRoundedIcon aria-hidden="true" />
            )}
          </button>

          <div className="hero__links">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <SocialButton
                  key={social.name}
                  href={social.href}
                  title={tr(social.title)}
                  label={social.name}
                  icon={<Icon />}
                  isFile={social.isFile}
                />
              );
            })}
          </div>
        </div>

        {/* Always rendered so showing it never shifts the sections below. */}
        <span
          className={`hero__now-playing${
            isPlaying ? "" : " hero__now-playing--hidden"
          }`}
          aria-hidden={!isPlaying}
        >
          {copy.hero.nowPlaying} · {projectName(track, locale)}
        </span>
      </div>
    </section>
  );
};

export default Hero;
