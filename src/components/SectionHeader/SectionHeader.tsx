import "./SectionHeader.scss";

export interface SectionHeaderProps {
  id: string;
  title: string;
  /** Small right aligned note, the "Show all" slot of a Spotify shelf. */
  hint?: string;
}

const SectionHeader = ({ id, title, hint }: SectionHeaderProps) => (
  <div className="section-header">
    <h2 className="section-header__title" id={id}>
      {title}
    </h2>
    {hint && <span className="section-header__hint">{hint}</span>}
  </div>
);

export default SectionHeader;
