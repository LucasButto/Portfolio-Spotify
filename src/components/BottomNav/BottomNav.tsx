import { navItems } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import type { SectionId } from "@/types/portfolio";
import { navIconMap } from "@/utils/navIcons";
import "./BottomNav.scss";

export interface BottomNavProps {
  activeId: SectionId;
  onNavigate: (id: SectionId) => void;
}

/** Mobile-only tab bar. From `bp-md` up the sidebar takes over. */
const BottomNav = ({ activeId, onNavigate }: BottomNavProps) => {
  const { copy, tr } = useI18n();

  return (
    <nav className="bottom-nav" aria-label={copy.topBar.sections}>
      {navItems.map((item) => {
        const Icon = navIconMap[item.icon];
        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            type="button"
            className={`bottom-nav__item${
              isActive ? " bottom-nav__item--active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? "true" : undefined}
          >
            <Icon className="bottom-nav__icon" aria-hidden="true" />
            <span className="bottom-nav__label">{tr(item.label)}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
