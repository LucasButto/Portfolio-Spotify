import { useI18n } from "@/hooks/useI18n";
import { LOCALES } from "@/types/i18n";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = () => {
  const { locale, toggleLocale, copy } = useI18n();
  const target = locale === "es" ? "EN" : "ES";

  return (
    <button
      type="button"
      className={`lang-switcher lang-switcher--${locale}`}
      onClick={toggleLocale}
      title={copy.language.switchTo(target)}
      aria-label={copy.language.switchTo(target)}
    >
      <span className="lang-switcher__knob" aria-hidden="true" />
      {LOCALES.map((option) => (
        <span
          key={option}
          className={`lang-switcher__label${
            locale === option ? " lang-switcher__label--active" : ""
          }`}
          aria-hidden="true"
        >
          {option.toUpperCase()}
        </span>
      ))}
    </button>
  );
};

export default LanguageSwitcher;
