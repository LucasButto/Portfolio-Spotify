import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "prosperisrl",
    name: "Prosperi SRL",
    subtitle: {
      en: "Construction company website",
      es: "Sitio web de constructora",
    },
    accent: "#cf9169",
    image: "/projects/Proj16.png",
    alignImage: "left",
    skills: ["React.js", "TypeScript", "SASS"],
    link: "https://prosperisrl.com/",
    description: {
      en: "Development of a portfolio website for Prosperi, a high-standard residential and commercial construction company based in Rosario, Argentina. Built with React, TypeScript and Vite, featuring an editorial dark theme with serif/sans typography, a filterable project gallery organized by trade category (Albañilería, Pintura, Revestimientos, Trabajos de Altura), and on-demand image optimization via Netlify's image CDN. Includes a philosophy section, a spam-protected contact form, and Instagram integration, fully responsive and deployed on Netlify.",
      es: "Desarrollo de un sitio web institucional para Prosperi, una empresa de construcción residencial y comercial de alto estándar con base en Rosario, Argentina. Construido con React, TypeScript y Vite, con un tema oscuro editorial y tipografía serif/sans, una galería de proyectos filtrable organizada por rubro (Albañilería, Pintura, Revestimientos, Trabajos de Altura) y optimización de imágenes on-demand mediante el CDN de imágenes de Netlify. Incluye una sección de filosofía, un formulario de contacto protegido contra spam e integración con Instagram, totalmente responsive y desplegado en Netlify.",
    },
  },
  {
    id: "flowly",
    name: "Flowly",
    subtitle: {
      en: "All-in-one productivity app",
      es: "App de productividad todo en uno",
    },
    accent: "#6366F1",
    image: "/projects/proj15.jpg",
    alignImage: "left",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "SASS",
      "Firebase",
      "Google Calendar API",
    ],
    github: "https://github.com/LucasButto/Flowly",
    link: "https://flowly-habits.vercel.app/",
    description: {
      en: "Development of an all-in-one productivity web app to organize habits, routines, tasks, and events, built with Next.js 16, React 19, and TypeScript. Features Google authentication and Firestore persistence, a routines tracker with streaks and daily/weekly/monthly/yearly statistics, a to-do system with lists, subtasks, drag & drop, and favorites, and a full calendar with day/week/month/year views, recurring events (yearly and business-day rules), conflict detection, reminders, and two-way Google Calendar sync. Also includes a Pomodoro timer with custom named presets, light/dark theming via CSS variables, an installable PWA, skeleton loaders, and a fully responsive, internationalized interface.",
      es: "Desarrollo de una aplicación web de productividad todo en uno para organizar hábitos, rutinas, tareas y eventos, construida con Next.js 16, React 19 y TypeScript. Incluye autenticación con Google y persistencia en Firestore, un tracker de rutinas con rachas y estadísticas diarias/semanales/mensuales/anuales, un sistema de tareas con listas, subtareas, drag & drop y favoritos, y un calendario completo con vistas de día/semana/mes/año, eventos recurrentes (reglas anuales y de días hábiles), detección de conflictos, recordatorios y sincronización bidireccional con Google Calendar. También incluye un temporizador Pomodoro con presets personalizados, tema claro/oscuro mediante variables CSS, PWA instalable, skeleton loaders y una interfaz totalmente responsive e internacionalizada.",
    },
  },
  {
    id: "nextflix",
    name: "Nextflix",
    subtitle: {
      en: "Movie & series discovery platform",
      es: "Plataforma de películas y series",
    },
    accent: "#E50914",
    image: "/projects/proj12.jpg",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "SASS",
      "Firebase",
      "TMDB API",
    ],
    github: "https://github.com/LucasButto/Nextflix",
    link: "https://nextflix-web.vercel.app/",
    description: {
      en: "Development of a Netflix-style movie and series discovery platform built with Next.js 16, React 19, and TypeScript. Features bilingual support (Spanish & English), Firebase authentication and Firestore persistence, TMDB API integration for content data, and a responsive design with Material UI. Includes watchlist management, detailed content pages with trailers and fun facts, user reviews, timezone-aware date logic, and advanced filtering capabilities.",
      es: "Desarrollo de una plataforma de descubrimiento de películas y series al estilo Netflix, construida con Next.js 16, React 19 y TypeScript. Incluye soporte bilingüe (español e inglés), autenticación con Firebase y persistencia en Firestore, integración con la API de TMDB para los datos de contenido y un diseño responsive con Material UI. Suma gestión de watchlist, páginas de detalle con trailers y datos curiosos, reseñas de usuarios, lógica de fechas según zona horaria y filtros avanzados.",
    },
  },
  {
    id: "peisino",
    name: "Architect Julian Peisino Portfolio",
    subtitle: {
      en: "Architecture portfolio",
      es: "Portfolio de arquitectura",
    },
    accent: "#7FD5FD",
    image: "/projects/proj11.jpg",
    alignImage: "left",
    skills: ["Next.js", "React.js", "HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://Peisino.com.ar/",
    description: {
      en: "Development of a website for architect Julián Peisino using Next.js for the frontend and Firebase for backend data management. The platform showcases architectural projects dynamically and optimally, ensuring smooth navigation and an intuitive user experience.",
      es: "Desarrollo de un sitio web para el arquitecto Julián Peisino usando Next.js en el frontend y Firebase para la gestión de datos en el backend. La plataforma muestra los proyectos de arquitectura de forma dinámica y optimizada, garantizando una navegación fluida y una experiencia de usuario intuitiva.",
    },
  },
  {
    id: "amecom",
    name: "AMECOM Internet",
    subtitle: {
      en: "ISP web optimization",
      es: "Optimización web para un ISP",
    },
    accent: "#7B2FBE",
    image: "/projects/proj14.jpg",
    skills: ["WordPress", "Elementor", "Google Ads", "HTML", "CSS"],
    link: "https://amecom.com.ar",
    description: {
      en: "Web optimization project for AMECOM Internet, an ISP serving rural and industrial zones in Argentina. Work included Google Ads pixel installation and conversion tracking setup via Insert Headers and Footers, replacement of a third-party chatbot with a direct WhatsApp contact button, content reorganization using Elementor's Theme Builder and structure panel, and configuration of WhatsApp inquiry buttons per service plan using JetEngine dynamic templates. All interactions are tracked as conversion events in Google Ads.",
      es: "Proyecto de optimización web para AMECOM Internet, un ISP que brinda servicio en zonas rurales e industriales de Argentina. El trabajo incluyó la instalación del píxel de Google Ads y la configuración del seguimiento de conversiones mediante Insert Headers and Footers, el reemplazo de un chatbot de terceros por un botón de contacto directo por WhatsApp, la reorganización del contenido con el Theme Builder y el panel de estructura de Elementor, y la configuración de botones de consulta por WhatsApp para cada plan de servicio usando plantillas dinámicas de JetEngine. Todas las interacciones se registran como eventos de conversión en Google Ads.",
    },
  },
  {
    id: "homesteelhome",
    name: "HomeSteelHome",
    subtitle: {
      en: "Steel construction landing page",
      es: "Landing de construcción en acero",
    },
    accent: "#fded00",
    image: "/projects/proj13.jpg",
    skills: ["HTML5", "CSS3", "JavaScript"],
    link: "https://homesteelhome.com.ar/",
    description: {
      en: "Design and development of a commercial landing page for HomeSteelHome, a steel construction products brand based in Rosario, Argentina. Built with semantic HTML5, vanilla CSS and JavaScript — no frameworks. Features a multi-image hero carousel with CSS opacity transitions and JS auto-rotation, a responsive 3×2 product grid with glassmorphism overlays, SVG trapezoid curve at the hero base, scroll-driven fade-in animations, and a fixed WhatsApp CTA. Fully responsive across mobile, tablet, laptop and 2K+ viewports, validated with Playwright screenshot testing. Deployed to Latin Cloud with a NIC Argentina domain and SSL via CloudPanel.",
      es: "Diseño y desarrollo de una landing page comercial para HomeSteelHome, una marca de productos para construcción en acero con base en Rosario, Argentina. Construida con HTML5 semántico, CSS y JavaScript puros — sin frameworks. Incluye un hero con carrusel de múltiples imágenes con transiciones de opacidad en CSS y rotación automática en JS, una grilla de productos 3×2 responsive con overlays glassmorphism, una curva trapezoidal en SVG en la base del hero, animaciones de aparición al hacer scroll y un CTA fijo de WhatsApp. Totalmente responsive en mobile, tablet, laptop y viewports 2K+, validada con tests de captura en Playwright. Desplegada en Latin Cloud con dominio de NIC Argentina y SSL mediante CloudPanel.",
    },
  },
  {
    id: "bienenstock",
    name: "Bienenstock Corp. ERP System",
    subtitle: {
      en: "Business management ERP",
      es: "ERP de gestión empresarial",
    },
    accent: "#c1c1c1",
    image: "/projects/proj10.jpg",
    alignImage: "left",
    skills: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "C#",
      ".Net Core",
      "SQL Server",
    ],
    github: "https://github.com/MaxiPepa/bienenstock-corp-web",
    link: "https://bienenstock-corp-web.vercel.app/login",
    description: {
      en: "This system is designed to efficiently manage the business operations of the company, providing comprehensive tools for purchasing, sales, inventory management, analysis, and more. The system uses modern technologies such as React for the frontend, C# and .NET for the backend, and SQL Server as the database.",
      es: "Este sistema está diseñado para gestionar de forma eficiente las operaciones comerciales de la empresa, brindando herramientas integrales para compras, ventas, gestión de inventario, análisis y más. El sistema utiliza tecnologías modernas como React en el frontend, C# y .NET en el backend, y SQL Server como base de datos.",
    },
  },
  {
    id: "pokequiz",
    name: "PokeQuiz",
    subtitle: {
      en: "Guess the Pokémon game",
      es: "Juego de adivinar el Pokémon",
    },
    accent: "#f2c004",
    image: "/projects/proj9.jpg",
    alignImage: "left",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/LucasButto/PokeQuiz",
    link: "https://lucasbutto.github.io/PokeQuiz/",
    description: {
      en: "This is a React-based game project where you have to guess the name of a Pokémon from its silhouette. The project comes with custom settings where you can choose the regions you want to play with and it saves your best score in localstorage.",
      es: "Este es un juego desarrollado en React donde tenés que adivinar el nombre de un Pokémon a partir de su silueta. El proyecto incluye una configuración personalizada donde podés elegir las regiones con las que querés jugar y guarda tu mejor puntaje en localstorage.",
    },
  },
  {
    id: "store-management",
    name: "Store-Management",
    subtitle: {
      en: "Stock control system",
      es: "Sistema de control de stock",
    },
    accent: "#0c98c7",
    image: "/projects/proj1.jpg",
    alignImage: "left",
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap", "Firebase"],
    github: "https://github.com/LucasButto/store-management",
    link: "https://store-management-ar.netlify.app/",
    description: {
      en: "This project is a stock control system that uses React for the frontend and Firebase for the backend. With it, you can keep a record of your products and their available quantities easily and quickly.",
      es: "Este proyecto es un sistema de control de stock que usa React en el frontend y Firebase en el backend. Con él podés llevar un registro de tus productos y sus cantidades disponibles de forma fácil y rápida.",
    },
  },
  {
    id: "pomodoro",
    name: "Pomodoro Timer",
    subtitle: {
      en: "Focus & productivity timer",
      es: "Temporizador de foco y productividad",
    },
    accent: "#ffb870",
    image: "/projects/proj8.jpg",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/LucasButto/Pomodoro",
    link: "https://lucasbutto.github.io/Pomodoro/",
    description: {
      en: "This project is a Pomodoro clock application written in React. Pomodoro is a productivity method that involves working in short time blocks followed by short breaks. This clock will help you stay focused and improve your productivity.",
      es: "Este proyecto es una aplicación de reloj Pomodoro escrita en React. Pomodoro es un método de productividad que consiste en trabajar en bloques cortos de tiempo seguidos de pausas breves. Este reloj te va a ayudar a mantener el foco y mejorar tu productividad.",
    },
  },
  {
    id: "crud-api",
    name: "CRUD API",
    subtitle: {
      en: "REST API for store products",
      es: "API REST para productos",
    },
    accent: "#7dd438",
    image: "/projects/proj3.jpg",
    alignImage: "left",
    skills: [".NET Core", "MySQL"],
    github: "https://github.com/LucasButto/store-management-api",
    description: {
      en: "RESTful API for managing store products, developed with .NET and SQL Server. It supports full CRUD operations and includes integrated authentication.",
      es: "API RESTful para la gestión de productos de una tienda, desarrollada con .NET y SQL Server. Soporta operaciones CRUD completas e incluye autenticación integrada.",
    },
  },
  {
    id: "more-in-progress",
    name: "More In Progress",
    nameLabel: { en: "More In Progress", es: "Más en camino" },
    subtitle: {
      en: "New tracks on the way",
      es: "Nuevos temas en camino",
    },
    accent: "#c49c3d",
    image: "/projects/projX.jpg",
    comingSoon: true,
    description: {
      en: "New projects are currently in the works. Come back soon to see what is coming next.",
      es: "Hay nuevos proyectos en desarrollo. Volvé pronto para ver qué se viene.",
    },
  },
];

/** Every project except the "coming soon" placeholder card. */
export const shippedProjects = projects.filter(
  (project) => !project.comingSoon,
);
