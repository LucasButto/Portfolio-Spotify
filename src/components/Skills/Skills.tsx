import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { skillGroups } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import "./Skills.scss";

const Skills = () => {
  const { copy, tr } = useI18n();

  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <SectionHeader
        id="skills-title"
        title={copy.skills.title}
        hint={copy.skills.hint}
      />

      <div className="skills__groups">
        {skillGroups.map((group) => (
          <div
            className={`skills__group${group.wide ? " skills__group--wide" : ""}`}
            key={group.category.en}
          >
            <h3 className="skills__category">{tr(group.category)}</h3>

            <ul
              className={`skills__list${group.wide ? " skills__list--columns" : ""}`}
            >
              {group.items.map((skill, index) => {
                const label = skill.note
                  ? `${skill.name} (${tr(skill.note)})`
                  : skill.name;

                return (
                  <li key={skill.name}>
                    <a
                      className="skills__item"
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      title={copy.skills.learnMore(skill.name)}
                    >
                      <span className="skills__index">{index + 1}</span>
                      <img
                        className="skills__logo"
                        src={skill.logo}
                        alt=""
                        loading="lazy"
                      />
                      <span className="skills__name">{label}</span>
                      <LaunchRoundedIcon
                        className="skills__launch"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
