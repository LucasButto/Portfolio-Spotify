import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { about } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import "./About.scss";

const About = () => {
  const { copy, tr } = useI18n();

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <SectionHeader
        id="about-title"
        title={tr(about.title)}
        hint={copy.about.hint}
      />

      <div className="about__text">
        {tr(about.paragraphs).map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
