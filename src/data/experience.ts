import type { EducationItem, ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    role: { en: "FullStack Developer", es: "Desarrollador FullStack" },
    company: "La Mutual de AMR",
    start: "2024-11",
    end: null,
    description: {
      en: "Development and maintenance of fullstack functionalities using Next.js for the frontend and .NET for the backend to enhance user experience and system efficiency. Migration and optimization of databases, transferring structures and data from Adabas to SQL Server while ensuring integrity and performance. Creation and adaptation of new classes and views to integrate the migrated information into the system.",
      es: "Desarrollo y mantenimiento de funcionalidades fullstack utilizando Next.js en el frontend y .NET en el backend para mejorar la experiencia de usuario y la eficiencia del sistema. Migración y optimización de bases de datos, trasladando estructuras y datos desde Adabas a SQL Server garantizando la integridad y el rendimiento. Creación y adaptación de nuevas clases y vistas para integrar la información migrada al sistema.",
    },
    tags: ["Next.js", ".NET", "SQL Server", "Adabas"],
  },
  {
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    company: "La Mutual de AMR",
    start: "2023-11",
    end: "2024-11",
    description: {
      en: "Development and maintenance of frontend components and pages using Next.js to enhance user experience and improve the efficiency of the Mutual's website. Close collaboration with the design team and other developers to implement responsive and functional designs that meet quality and usability standards. Progressive migration of existing functionalities and pages to Next.js architecture, optimizing performance and scalability.",
      es: "Desarrollo y mantenimiento de componentes y páginas del frontend utilizando Next.js para mejorar la experiencia de usuario y la eficiencia del sitio web de la Mutual. Colaboración estrecha con el equipo de diseño y otros desarrolladores para implementar diseños responsive y funcionales que cumplan con los estándares de calidad y usabilidad. Migración progresiva de funcionalidades y páginas existentes a la arquitectura de Next.js, optimizando el rendimiento y la escalabilidad.",
    },
    tags: ["Next.js", "React", "TypeScript", "SASS", "Storybook"],
  },
  {
    role: { en: "Software Developer", es: "Desarrollador de Software" },
    company: "Neoris",
    start: "2023-10",
    end: "2023-10",
    description: {
      en: "Development and maintenance of enterprise applications using .NET Framework and .NET Core technologies, with a primary focus on frontend development using Angular for the Dreyfus platform. Close collaboration with business analysts and end-users to understand requirements and design technical solutions that meet the needs of the Dreyfus system. Design and development of interactive and responsive user interfaces that enhance usability and improve the user experience within the Dreyfus system.",
      es: "Desarrollo y mantenimiento de aplicaciones empresariales utilizando tecnologías .NET Framework y .NET Core, con foco principal en el desarrollo frontend con Angular para la plataforma Dreyfus. Colaboración estrecha con analistas funcionales y usuarios finales para entender los requerimientos y diseñar soluciones técnicas que respondan a las necesidades del sistema Dreyfus. Diseño y desarrollo de interfaces de usuario interactivas y responsive que mejoran la usabilidad y la experiencia dentro del sistema Dreyfus.",
    },
    tags: ["Angular", ".NET Core", ".NET Framework"],
  },
  {
    role: { en: "Internships", es: "Pasantías" },
    company: "Arrow Computacion",
    start: "2017-09",
    end: "2017-09",
    description: {
      en: "I completed an internship at Arrow Computación, where I was responsible for assembling and maintaining computer equipment. During my time there, I enhanced my technical skills and developed a deeper understanding of computer components and their functionality.",
      es: "Realicé una pasantía en Arrow Computación, donde me encargué del armado y el mantenimiento de equipos informáticos. Durante ese período mejoré mis habilidades técnicas y desarrollé un entendimiento más profundo de los componentes de una computadora y su funcionamiento.",
    },
    tags: ["Hardware", "Maintenance"],
  },
];

/** First professional role — used to compute the years of experience shown in the hero. */
export const careerStart = "2023-9";

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
