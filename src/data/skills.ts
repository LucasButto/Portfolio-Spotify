import bootstrap from "@/assets/logos/bootstrap.png";
import claude from "@/assets/logos/claude.png";
import claudecode from "@/assets/logos/claudecode.png";
import codex from "@/assets/logos/codex.png";
import csharp from "@/assets/logos/csharp.png";
import css from "@/assets/logos/css.png";
import firebase from "@/assets/logos/firebase.png";
import git from "@/assets/logos/git.png";
import github from "@/assets/logos/github.png";
import githubcopilot from "@/assets/logos/githubcopilot.png";
import html from "@/assets/logos/html.png";
import javascript from "@/assets/logos/javascript.png";
import jira from "@/assets/logos/jira.png";
import mysql from "@/assets/logos/mysql.png";
import netcore from "@/assets/logos/netcore.png";
import nextjs from "@/assets/logos/nextjs.png";
import nodejs from "@/assets/logos/nodejs.png";
import postman from "@/assets/logos/postman.png";
import python from "@/assets/logos/python.png";
import react from "@/assets/logos/react.png";
import sass from "@/assets/logos/sass.png";
import trello from "@/assets/logos/trello.png";
import typescript from "@/assets/logos/typescript.png";
import visualstudio2022 from "@/assets/logos/visualstudio2022.png";
import visualstudiocode from "@/assets/logos/visualstudiocode.png";
import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    category: { en: "Languages", es: "Lenguajes" },
    items: [
      {
        name: "TypeScript",
        logo: typescript,
        link: "https://youtu.be/fUgxxhI_bvc?si=FP_gmO0UMxCykenj",
      },
      {
        name: "JavaScript",
        logo: javascript,
        link: "https://www.aprendejavascript.dev/",
      },
      {
        name: "C#",
        logo: csharp,
        link: "https://www.tutorialesprogramacionya.com/csharpya/",
      },
      {
        name: "Python",
        logo: python,
        link: "https://www.w3schools.com/python/",
      },
    ],
  },
  {
    category: { en: "Frontend", es: "Frontend" },
    items: [
      {
        name: "Next.js",
        logo: nextjs,
        link: "https://youtu.be/jMy4pVZMyLM?si=JyWwkmxq5w1oyREl",
      },
      {
        name: "React",
        logo: react,
        link: "https://github.com/midudev/aprendiendo-react",
      },
      { name: "Sass", logo: sass, link: "https://sass-lang.com/guide/" },
      {
        name: "Bootstrap",
        logo: bootstrap,
        link: "https://getbootstrap.esdocu.com/docs/5.1/getting-started/introduction/",
      },
      {
        name: "CSS",
        logo: css,
        link: "https://github.com/LucasButto/Resumen-HTML-CSS-JS/tree/main/CSS",
      },
      {
        name: "HTML",
        logo: html,
        link: "https://github.com/LucasButto/Resumen-HTML-CSS-JS/tree/main/HTML",
      },
    ],
  },
  {
    category: { en: "Backend", es: "Backend" },
    items: [
      {
        name: "Node.js",
        note: { en: "learning", es: "aprendiendo" },
        logo: nodejs,
        link: "https://www.youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7",
      },
      {
        name: ".NET Core",
        logo: netcore,
        link: "https://www.youtube.com/playlist?list=PL0-hIHBwsOM5tjSkf1KRvS93aT6JbL8If",
      },
      {
        name: "MySQL",
        logo: mysql,
        link: "https://www.youtube.com/playlist?list=PLKZTJP_-zNEJfUwtbg2h4ewgaNK5dnzSp",
      },
    ],
  },
  {
    // Same item count as Backend on purpose: skills__groups is a 2-col grid
    // where paired rows share a height, so mismatched sizes (like this
    // category next to the 9-item Tools list) leave a visible dead gap.
    category: { en: "AI Tools", es: "Herramientas de IA" },
    items: [
      {
        name: "Claude Code",
        logo: claudecode,
        link: "https://claude.com/product/claude-code",
      },
      {
        name: "Codex",
        logo: codex,
        link: "https://openai.com/codex/",
      },
      {
        name: "GitHub Copilot",
        logo: githubcopilot,
        link: "https://github.com/features/copilot",
      },
    ],
  },
  {
    category: { en: "Tools", es: "Herramientas" },
    wide: true,
    items: [
      { name: "Git", logo: git, link: "https://git-scm.com/doc" },
      { name: "GitHub", logo: github, link: "https://github.com/" },
      {
        name: "Visual Studio Code",
        logo: visualstudiocode,
        link: "https://code.visualstudio.com/docs",
      },
      {
        name: "Visual Studio 2022",
        logo: visualstudio2022,
        link: "https://docs.microsoft.com/en-us/visualstudio/",
      },
      {
        name: "Jira",
        logo: jira,
        link: "https://www.atlassian.com/es/software/jira/guides/getting-started/introduction#what-is-jira-software",
      },
      { name: "Trello", logo: trello, link: "https://trello.com/guide" },
      {
        name: "Firebase",
        logo: firebase,
        link: "https://firebase.google.com/docs",
      },
      {
        name: "Postman",
        logo: postman,
        link: "https://learning.postman.com/docs/getting-started/introduction/",
      },
      {
        name: "Claude",
        logo: claude,
        link: "https://claude.ai/",
      },
    ],
  },
];

export const totalSkills = skillGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);
