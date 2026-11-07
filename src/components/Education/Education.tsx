import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { education } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import "./Education.scss";

const Education = () => {
  const { copy, tr } = useI18n();

  return (
    <section
      className="education"
      id="education"
      aria-labelledby="education-title"
    >
      <SectionHeader
        id="education-title"
        title={copy.education.title}
        hint={copy.education.hint}
      />

      <ul className="education__list">
        {education.map((item) => (
          <li className="education__item" key={item.degree.en}>
            <span className="education__icon" aria-hidden="true">
              <SchoolRoundedIcon />
            </span>

            <div className="education__body">
              <div className="education__heading">
                <h3 className="education__degree">{tr(item.degree)}</h3>
                <span className="education__type">{tr(item.type)}</span>
              </div>

              <p className="education__meta">
                {item.institution ? `${item.institution} · ` : ""}
                {item.period}
              </p>

              <p className="education__description">{tr(item.description)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
