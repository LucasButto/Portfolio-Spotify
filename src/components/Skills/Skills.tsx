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
          <div className="skills__group" key={group.category.en}>
            <h3 className="skills__category">{tr(group.category)}</h3>

            <ul className="skills__list">
              {group.items.map((skill) => {
                const label = skill.note
                  ? `${skill.name} (${tr(skill.note)})`
                  : skill.name;

                return (
                  <li key={skill.name}>
                    <a
                      className="skills__chip"
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      title={copy.skills.learnMore(skill.name)}
                    >
                      <img
                        className="skills__logo"
                        src={skill.logo}
                        alt=""
                        loading="lazy"
                      />
                      <span className="skills__name">{label}</span>
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
