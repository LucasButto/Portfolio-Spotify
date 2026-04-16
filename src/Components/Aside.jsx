import { useViewTransitionNavigation } from "../Hooks/useViewTransitionNavigation";
import { usePlayer } from "../Hooks/PlayerContext";
import { ProjectList } from "../Helpers/ProjectList";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";

import "../Styles/Aside.css";

const Aside = () => {
  const currentPath = window.location.pathname;
  const { viewNavigate } = useViewTransitionNavigation();
  const { setCurrentProject } = usePlayer();

  const checkPath = (path) => {
    if (
      (currentPath === "/" && path === "/home") ||
      ((currentPath === "/about" || currentPath === "/skills") &&
        path === "/home") ||
      (currentPath.startsWith("/project/") && path === "/projects") ||
      currentPath === path
    ) {
      return "current-nav top-link";
    } else {
      return "top-link";
    }
  };

  const recentProjects = ProjectList.filter((p) => p.name !== "More In Progress").slice(0, 4);

  return (
    <>
      <aside className="aside">
        <div className="aside-content">
          <h2>Portfolio</h2>
          <hr />
          <nav className="nav">
            <ul>
              <li>
                <div onClick={() => viewNavigate("/home")}>
                  <div className={checkPath("/home")}>
                    <HomeRoundedIcon />
                    <span>Home</span>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => viewNavigate("/experience")}>
                  <div className={checkPath("/experience")}>
                    <WorkRoundedIcon />
                    <span>Experience</span>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => viewNavigate("/projects")}>
                  <div className={checkPath("/projects")}>
                    <CodeRoundedIcon />
                    <span>Projects</span>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => viewNavigate("/education")}>
                  <div className={checkPath("/education")}>
                    <SchoolRoundedIcon />
                    <span>Education</span>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="aside-library">
          <div className="library-header">
            <LibraryMusicRoundedIcon />
            <span>Your Library</span>
          </div>
          <div className="library-list">
            {recentProjects.map((project, idx) => (
              <div
                key={idx}
                className="library-item"
                onClick={() => {
                  setCurrentProject(project);
                  viewNavigate("/project/" + idx);
                }}
              >
                <img src={project.image} alt={project.name} />
                <div className="library-item-info">
                  <span className="library-item-name">{project.name}</span>
                  <span className="library-item-type">Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
