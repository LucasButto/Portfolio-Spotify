import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    category: { en: "Languages", es: "Lenguajes" },
    items: [
      {
        name: "TypeScript",
        logo: "/logos/typescript.png",
        link: "https://youtu.be/fUgxxhI_bvc?si=FP_gmO0UMxCykenj",
      },
      {
        name: "JavaScript",
        logo: "/logos/javascript.png",
        link: "https://www.aprendejavascript.dev/",
      },
      {
        name: "C#",
        logo: "/logos/csharp.png",
        link: "https://www.tutorialesprogramacionya.com/csharpya/",
      },
      {
        name: "Python",
        logo: "/logos/python.png",
        link: "https://www.w3schools.com/python/",
      },
    ],
  },
  {
    category: { en: "Frontend", es: "Frontend" },
    items: [
      {
        name: "Next.js",
        logo: "/logos/nextjs.png",
        link: "https://youtu.be/jMy4pVZMyLM?si=JyWwkmxq5w1oyREl",
      },
      {
        name: "React",
        logo: "/logos/react.png",
        link: "https://github.com/midudev/aprendiendo-react",
      },
      {
        name: "Sass",
        logo: "/logos/sass.png",
        link: "https://sass-lang.com/guide/",
      },
      {
        name: "Bootstrap",
        logo: "/logos/bootstrap.png",
        link: "https://getbootstrap.esdocu.com/docs/5.1/getting-started/introduction/",
      },
      {
        name: "CSS",
        logo: "/logos/css.png",
        link: "https://github.com/LucasButto/Resumen-HTML-CSS-JS/tree/main/CSS",
      },
      {
        name: "HTML",
        logo: "/logos/html.png",
        link: "https://github.com/LucasButto/Resumen-HTML-CSS-JS/tree/main/HTML",
      },
    ],
  },
  {
    category: { en: "Backend", es: "Backend" },
    items: [
      {
        name: "Node.js",
        // note: { en: "learning", es: "aprendiendo" },
        logo: "/logos/nodejs.png",
        link: "https://www.youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7",
      },
      {
        name: ".NET Core",
        logo: "/logos/netcore.png",
        link: "https://www.youtube.com/playlist?list=PL0-hIHBwsOM5tjSkf1KRvS93aT6JbL8If",
      },
      {
        name: "MySQL",
        logo: "/logos/mysql.png",
        link: "https://www.youtube.com/playlist?list=PLKZTJP_-zNEJfUwtbg2h4ewgaNK5dnzSp",
      },
    ],
  },
  {
    category: { en: "Tools", es: "Herramientas" },
    items: [
      { name: "Git", logo: "/logos/git.png", link: "https://git-scm.com/doc" },
      {
        name: "GitHub",
        logo: "/logos/github.png",
        link: "https://github.com/",
      },
      {
        name: "Visual Studio Code",
        logo: "/logos/visualstudiocode.png",
        link: "https://code.visualstudio.com/docs",
      },
      {
        name: "Visual Studio 2022",
        logo: "/logos/visualstudio2022.png",
        link: "https://docs.microsoft.com/en-us/visualstudio/",
      },
      {
        name: "Jira",
        logo: "/logos/jira.png",
        link: "https://www.atlassian.com/es/software/jira/guides/getting-started/introduction#what-is-jira-software",
      },
      {
        name: "Trello",
        logo: "/logos/trello.png",
        link: "https://trello.com/guide",
      },
      {
        name: "Firebase",
        logo: "/logos/firebase.png",
        link: "https://firebase.google.com/docs",
      },
      {
        name: "Postman",
        logo: "/logos/postman.png",
        link: "https://learning.postman.com/docs/getting-started/introduction/",
      },
      {
        name: "Claude",
        logo: "/logos/claude.png",
        link: "https://claude.ai/",
      },
    ],
  },
  {
    category: { en: "AI Tools", es: "Herramientas de IA" },
    items: [
      {
        name: "Claude Code",
        logo: "/logos/claudecode.png",
        link: "https://claude.com/product/claude-code",
      },
      {
        name: "Codex",
        logo: "/logos/codex.png",
        link: "https://openai.com/codex/",
      },
      {
        name: "GitHub Copilot",
        logo: "/logos/githubcopilot.png",
        link: "https://github.com/features/copilot",
      },
    ],
  },
];

export const totalSkills = skillGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);
