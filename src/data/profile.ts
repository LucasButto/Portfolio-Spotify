import type { AboutInfo, Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Lucas Butto",
  role: {
    en: "FullStack Developer",
    es: "Desarrollador FullStack",
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
      name: "Resume",
      title: { en: "Download my CV", es: "Descargá mi CV" },
      href: "/LucasButtoCV.pdf",
      icon: "resume",
      isFile: true,
    },
  ],
};

export const about: AboutInfo = {
  title: { en: "About Me", es: "Sobre mí" },
  paragraphs: {
    en: [
      "Fullstack developer with experience in migration, maintenance and optimization of websites to Next.js, focused on improving performance and scalability.",
      "Currently, at AMR Mutual, I work in the development and maintenance of functionalities in both frontend (Next.js) and backend (.NET), optimizing user experience and system efficiency.",
      "I also participate in the migration of databases from Adabas to SQL Server, creating new classes and views to integrate data into the platform.",
    ],
    es: [
      "Desarrollador fullstack con experiencia en migración, mantenimiento y optimización de sitios web a Next.js, enfocado en mejorar el rendimiento y la escalabilidad.",
      "Actualmente, en La Mutual de AMR, trabajo en el desarrollo y mantenimiento de funcionalidades tanto en frontend (Next.js) como en backend (.NET), optimizando la experiencia de usuario y la eficiencia del sistema.",
      "También participo en la migración de bases de datos desde Adabas a SQL Server, creando nuevas clases y vistas para integrar los datos en la plataforma.",
    ],
  },
};
