import type { Locale } from "@/types/i18n";

/**
 * Static interface copy. The English object is the source of truth: its shape
 * becomes the `Copy` type, so the Spanish version cannot drift out of sync.
 */
const en = {
  language: {
    label: "Language",
    switchTo: (target: string) => `Switch language to ${target}`,
  },
  sidebar: {
    brand: "Portfolio",
    mainNav: "Main navigation",
    library: "Your Library",
  },
  topBar: {
    sections: "Sections",
  },
  hero: {
    label: "Home",
    verified: "Verified profile",
    photoOf: (name: string) => `Photo of ${name}`,
    meta: (projects: number, technologies: number) =>
      `${projects} projects · ${technologies} technologies`,
    experience: (years: number) =>
      `${years} ${years === 1 ? "year" : "years"} of experience`,
    playLatest: "Play my latest project",
    pauseCurrent: "Pause the current project",
    pause: "Pause",
    nowPlaying: "Now playing",
  },
  about: {
    hint: "The B-side",
  },
  skills: {
    title: "Skills",
    hint: "On heavy rotation",
    learnMore: (name: string) => `Learn more about ${name}`,
    categories: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
    },
    notes: {
      learning: "learning",
    },
  },
  experience: {
    title: "Experience",
    hint: "Where I have been coding",
    columnRole: "Role",
    columnPeriod: "Period",
    current: "Current",
  },
  projects: {
    title: "Projects",
    hint: "My greatest hits",
    openDetails: (name: string) => `Open details of ${name}`,
    play: (name: string) => `Play ${name}`,
    pause: (name: string) => `Pause ${name}`,
    showMore: "Show more",
  },
  education: {
    title: "Education",
    hint: "How it started",
  },
  modal: {
    eyebrow: "Project",
    skillsUsed: "Skills used",
    repository: "Repository",
    visitRepository: "Visit the repository",
    site: "Site",
    goToSite: "Go to the site",
    close: "Close project details",
    preview: (name: string) => `${name} preview`,
  },
  player: {
    shuffle: "Shuffle",
    previous: "Previous project",
    next: "Next project",
    repeat: "Repeat",
    play: "Play",
    pause: "Pause",
    like: "Add to favourites",
    unlike: "Remove from favourites",
    openDetails: "Open project details",
    visit: (name: string) => `Visit ${name}`,
  },
  footer: {
    text: "Inspired by Spotify",
  },
  date: {
    year: "yr",
    years: "yr",
    month: "mo",
    months: "mo",
  },
};

export type Copy = typeof en;

const es: Copy = {
  language: {
    label: "Idioma",
    switchTo: (target: string) => `Cambiar idioma a ${target}`,
  },
  sidebar: {
    brand: "Portfolio",
    mainNav: "Navegación principal",
    library: "Tu biblioteca",
  },
  topBar: {
    sections: "Secciones",
  },
  hero: {
    label: "Inicio",
    verified: "Perfil verificado",
    photoOf: (name: string) => `Foto de ${name}`,
    meta: (projects: number, technologies: number) =>
      `${projects} proyectos · ${technologies} tecnologías`,
    experience: (years: number) =>
      `${years} ${years === 1 ? "año" : "años"} de experiencia`,
    playLatest: "Reproducir mi último proyecto",
    pauseCurrent: "Pausar el proyecto actual",
    pause: "Pausar",
    nowPlaying: "Sonando ahora",
  },
  about: {
    hint: "El lado B",
  },
  skills: {
    title: "Skills",
    hint: "Lo más escuchado",
    learnMore: (name: string) => `Aprendé más sobre ${name}`,
    categories: {
      languages: "Lenguajes",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas",
    },
    notes: {
      learning: "aprendiendo",
    },
  },
  experience: {
    title: "Experiencia",
    hint: "Dónde estuve codeando",
    columnRole: "Puesto",
    columnPeriod: "Período",
    current: "Actualidad",
  },
  projects: {
    title: "Proyectos",
    hint: "Mis grandes éxitos",
    openDetails: (name: string) => `Ver detalles de ${name}`,
    play: (name: string) => `Reproducir ${name}`,
    pause: (name: string) => `Pausar ${name}`,
    showMore: "Ver más",
  },
  education: {
    title: "Educación",
    hint: "Cómo empezó",
  },
  modal: {
    eyebrow: "Proyecto",
    skillsUsed: "Tecnologías usadas",
    repository: "Repositorio",
    visitRepository: "Visitá el repositorio",
    site: "Sitio",
    goToSite: "Ir al sitio",
    close: "Cerrar detalles del proyecto",
    preview: (name: string) => `Vista previa de ${name}`,
  },
  player: {
    shuffle: "Aleatorio",
    previous: "Proyecto anterior",
    next: "Proyecto siguiente",
    repeat: "Repetir",
    play: "Reproducir",
    pause: "Pausar",
    like: "Agregar a favoritos",
    unlike: "Quitar de favoritos",
    openDetails: "Ver detalles del proyecto",
    visit: (name: string) => `Visitar ${name}`,
  },
  footer: {
    text: "Inspirado en Spotify",
  },
  date: {
    year: "año",
    years: "años",
    month: "mes",
    months: "meses",
  },
};

export const copyByLocale: Record<Locale, Copy> = { en, es };
