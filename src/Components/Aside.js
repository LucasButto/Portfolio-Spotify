import React from "react";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

import "../Styles/Aside.css";

const Aside = () => {
  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <ul>
            <li>
              <button>
                <HomeRoundedIcon />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button>
                <CodeRoundedIcon />
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button>
                <WorkRoundedIcon />
                <span>Experience</span>
              </button>
            </li>
            <li>
              <button>
                <AlternateEmailRoundedIcon />
                <span>Contact</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
