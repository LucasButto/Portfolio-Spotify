import CodeIcon from "@mui/icons-material/Code";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";

import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { navItems, projects } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import { usePlayer } from "@/hooks/usePlayer";
import type { SectionId } from "@/types/portfolio";
import { navIconMap } from "@/utils/navIcons";
import { projectName } from "@/utils/project";
import "./Sidebar.scss";

export interface SidebarProps {
  activeId: SectionId;
  onNavigate: (id: SectionId) => void;
}

const Sidebar = ({ activeId, onNavigate }: SidebarProps) => {
  const { currentProject, openDetail } = usePlayer();
  const { copy, tr, locale } = useI18n();

  return (
    <aside className="sidebar">
      <nav className="sidebar__panel" aria-label={copy.sidebar.mainNav}>
        <div className="sidebar__brand">
          <span className="sidebar__brand-badge" aria-hidden="true">
            <CodeIcon />
          </span>
          <span className="sidebar__brand-name">{copy.sidebar.brand}</span>
          <LanguageSwitcher />
        </div>

        <ul className="sidebar__nav">
          {navItems.map((item) => {
            const Icon = navIconMap[item.icon];
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`sidebar__link${isActive ? " sidebar__link--active" : ""}`}
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <Icon aria-hidden="true" />
                  <span>{tr(item.label)}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar__panel sidebar__panel--library">
        <div className="sidebar__library-header">
          <LibraryMusicRoundedIcon aria-hidden="true" />
          <span>{copy.sidebar.library}</span>
        </div>

        <ul className="sidebar__library custom-scroll">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                className={`sidebar__project${
                  currentProject?.id === project.id
                    ? " sidebar__project--playing"
                    : ""
                }`}
                onClick={() => {
                  openDetail(project);
                  onNavigate("projects");
                }}
              >
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: project.alignImage ?? "center" }}
                />
                <span className="sidebar__project-info">
                  <span className="sidebar__project-name">
                    {projectName(project, locale)}
                  </span>
                  <span className="sidebar__project-type">
                    {tr(project.subtitle)}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
