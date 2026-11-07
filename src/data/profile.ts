import type { AboutInfo, Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Lucas Butto",
  role: {
    en: "Full Stack Developer",
    es: "Desarrollador Full Stack",
  },
  verified: true,
  avatar: "/img/avatar.jpeg",
  banner: "/img/Top-Img.jpg",
  email: "lbutto40@gmail.com",
  socials: [
    {
      name: "GitHub",
      title: { en: "Visit my GitHub", es: "Visitá mi GitHub" },
      href: "https://github.com/LucasButto",
      icon: "github",
    },
    {
      name: "LinkedIn",
      title: { en: "Check my LinkedIn", es: "Mirá mi LinkedIn" },
      href: "https://www.linkedin.com/in/lucas-butto-8a43a724b/",
      icon: "linkedin",
    },
    {
      name: "Email",
      title: { en: "Send me an email", es: "Escribime un mail" },
      href: "mailto:lbutto40@gmail.com",
      icon: "email",
    },
    {
      name: { en: "Resume", es: "Currículum" },
      title: { en: "View my resume", es: "Mirá mi currículum" },
      href: { en: "/Lucas_Butto_CV_ENG.pdf", es: "/Lucas_Butto_CV_ESP.pdf" },
      icon: "resume",
      isFile: true,
    },
  ],
};

export const about: AboutInfo = {
  title: { en: "About Me", es: "Sobre mí" },
  paragraphs: {
    en: [
      "I'm a full stack developer with 3 years of professional experience in web development and enterprise software. I specialize in React, Next.js and TypeScript and have experience with C#/.NET and SQL Server. I've built financial platforms and custom web solutions and worked on data migrations and integrations.",
      "At Eklekta, I develop custom websites and applications and collaborate on process automation, CRM solutions and integrations. I use AI-assisted development tools to streamline routine tasks, review code and iterate faster.",
    ],
    es: [
      "Soy desarrollador full stack con 3 años de experiencia profesional en desarrollo web y sistemas empresariales. Me especializo en React, Next.js y TypeScript y tengo experiencia con C#/.NET y SQL Server. Desarrollé plataformas financieras y soluciones web a medida, y participé en migraciones de datos e integraciones.",
      "En Eklekta desarrollo sitios y aplicaciones a medida y colaboro en automatizaciones de procesos, soluciones CRM e integraciones. Uso herramientas de IA para agilizar tareas, revisar código y acortar los ciclos de desarrollo.",
    ],
  },
};
