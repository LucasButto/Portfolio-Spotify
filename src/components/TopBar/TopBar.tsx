import { forwardRef } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { navItems } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import type { SectionId } from "@/types/portfolio";
import "./TopBar.scss";

export interface TopBarProps {
  activeId: SectionId;
  /** Turns the bar opaque once the hero is scrolled past. */
  scrolled: boolean;
}

const TopBar = forwardRef<HTMLElement, TopBarProps>(
  ({ activeId, scrolled }, ref) => {
    const { copy, tr } = useI18n();

    const activeItem = navItems.find((item) => item.id === activeId);
    const activeLabel = activeItem ? tr(activeItem.label) : copy.hero.label;

    return (
      <header
        ref={ref}
        className={`top-bar${scrolled ? " top-bar--scrolled" : ""}`}
      >
        <span className="top-bar__title">{activeLabel}</span>

        <div className="top-bar__lang">
          <LanguageSwitcher />
        </div>
      </header>
    );
  },
);

TopBar.displayName = "TopBar";

export default TopBar;
