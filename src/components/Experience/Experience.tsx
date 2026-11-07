import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { experience } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import { formatDuration, formatPeriod } from "@/utils/date";
import "./Experience.scss";

const Experience = () => {
  const { copy, tr, locale } = useI18n();

  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionHeader
        id="experience-title"
        title={copy.experience.title}
        hint={copy.experience.hint}
      />

      <div className="experience__head">
        <span className="experience__head-index">#</span>
        <span>{copy.experience.columnRole}</span>
        <span className="experience__head-period">
          {copy.experience.columnPeriod}
        </span>
        <span className="experience__head-time">
          <AccessTimeRoundedIcon aria-hidden="true" />
        </span>
      </div>

      <ol className="experience__list">
        {experience.map((job, index) => {
          const period = formatPeriod(job.start, job.end, locale, copy);
          const duration = formatDuration(job.start, job.end, copy);

          return (
            <li className="experience__row" key={`${job.company}-${job.start}`}>
              <span className="experience__index">
                <span className="experience__number">{index + 1}</span>
                <PlayArrowRoundedIcon
                  className="experience__play"
                  aria-hidden="true"
                />
              </span>

              <div className="experience__body">
                <p className="experience__role">{tr(job.role)}</p>
                <p className="experience__company">{job.company}</p>
                <p className="experience__description">{tr(job.description)}</p>

                <ul className="experience__tags">
                  {job.tags.map((tag) => (
                    <li className="experience__tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <p className="experience__period experience__period--inline">
                  {period} · {duration}
                </p>
              </div>

              <span className="experience__period">{period}</span>

              <span className="experience__duration">{duration}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
