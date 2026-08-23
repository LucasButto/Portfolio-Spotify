import type { NavItem } from "@/types/portfolio";

export const navItems: NavItem[] = [
  { id: "home", label: { en: "Home", es: "Inicio" }, icon: "home" },
  { id: "about", label: { en: "About", es: "Sobre mí" }, icon: "user" },
  {
    id: "experience",
    label: { en: "Experience", es: "Experiencia" },
    icon: "briefcase",
  },
  { id: "projects", label: { en: "Projects", es: "Proyectos" }, icon: "grid" },
  { id: "skills", label: { en: "Skills", es: "Skills" }, icon: "sparkles" },
  {
    id: "education",
    label: { en: "Education", es: "Educación" },
    icon: "school",
  },
];
