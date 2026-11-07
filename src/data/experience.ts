import type { EducationItem, ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    company: "Eklekta",
    start: "2026-03",
    end: null,
    description: {
      en: "I develop custom websites and web applications, from building responsive interfaces to deploying them. I collaborate on process automation, CRM solutions and business integrations, and work with the team to define requirements and design the user experience.",
      es: "Desarrollo sitios y aplicaciones web a medida, desde la implementación de interfaces responsivas hasta la puesta en producción. Colaboro en automatizaciones de procesos, soluciones CRM e integraciones para negocios, y trabajo con el equipo para definir requerimientos y diseñar la experiencia de usuario.",
    },
    tags: ["React", "TypeScript", "SASS", "Vite"],
  },
  {
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    company: "La Mutual de AMR",
    start: "2024-10",
    end: "2026-03",
    description: {
      en: "I developed and maintained internal features and C#/.NET services backed by SQL Server for investments, treasury, loans and claims, with a focus on data integrity and business rules. I helped migrate workflows and data from Adabas to SQL Server, implementing CRUD operations, validations and complex queries. I also built reusable components and implemented security measures for a corporate single-page application using Next.js and React.",
      es: "Desarrollé y mantuve funcionalidades internas y servicios en C#/.NET con SQL Server para inversiones, tesorería, préstamos y reclamos, con foco en la integridad de los datos y las reglas de negocio. Participé en la migración de procesos y datos de Adabas a SQL Server, con operaciones de ABM, validaciones y consultas complejas. También desarrollé componentes reutilizables e implementé medidas de seguridad para una SPA corporativa con Next.js y React.",
    },
    tags: ["C#", ".NET", "SQL Server", "Adabas", "Next.js", "React"],
  },
  {
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    company: "La Mutual de AMR",
    start: "2023-11",
    end: "2024-10",
    description: {
      en: "I built screens and workflows for financial transactions, including transfers and settlements, using Next.js, React and TypeScript. I created reusable, responsive components with SCSS and Bootstrap and documented them in Storybook. I added tests with Jest and React Testing Library and helped improve the frontend's usability and maintainability.",
      es: "Implementé pantallas y flujos para operaciones financieras, incluidas transferencias y liquidaciones, con Next.js, React y TypeScript. Construí componentes reutilizables y responsivos con SCSS y Bootstrap y los documenté en Storybook. Agregué pruebas con Jest y React Testing Library y colaboré en mejoras de usabilidad y mantenimiento del frontend.",
    },
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "SCSS",
      "Bootstrap",
      "Storybook",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    role: { en: "Software Developer", es: "Desarrollador de Software" },
    company: "NEORIS",
    start: "2023-10",
    end: "2023-11",
    description: {
      en: "I worked in an enterprise software development environment using .NET and completed technical training in .NET and Angular. I helped develop and maintain web applications and user interfaces.",
      es: "Participé en un entorno de desarrollo de software empresarial con .NET y completé una formación técnica en .NET y Angular. Colaboré en el desarrollo y mantenimiento de interfaces y aplicaciones web.",
    },
    tags: [".NET", "Angular"],
  },
];

/** First professional role — used to compute the years of experience shown in the hero. */
export const careerStart = "2023-10";

export const education: EducationItem[] = [
  {
    degree: {
      en: "University Degree in Programming",
      es: "Título universitario en Programación",
    },
    period: "2021 - 2023",
    type: { en: "University", es: "Universidad" },
    description: {
      en: "University degree in programming that gave me skills in software and application development, programming languages, databases and technology project management, allowing me to create innovative solutions for different technological needs.",
      es: "Carrera universitaria en programación que me dio habilidades en desarrollo de software y aplicaciones, lenguajes de programación, bases de datos y gestión de proyectos tecnológicos, permitiéndome crear soluciones innovadoras para distintas necesidades tecnológicas.",
    },
  },
  {
    degree: {
      en: "Bachelor in economics and administration",
      es: "Bachiller en Economía y Administración",
    },
    institution: "Eesopi N3081 Dante Alighieri",
    period: "2013 - 2017",
    type: { en: "High School", es: "Secundario" },
    description: {
      en: "I obtained a Bachelor's degree in Economics and Administration during my high school studies, acquiring knowledge in areas such as finance, accounting, marketing and human resources. This education provided me with fundamental skills in the understanding of the business world.",
      es: "Obtuve el título de Bachiller en Economía y Administración durante mis estudios secundarios, adquiriendo conocimientos en áreas como finanzas, contabilidad, marketing y recursos humanos. Esta formación me brindó habilidades fundamentales para entender el mundo empresarial.",
    },
  },
];
