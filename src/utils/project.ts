import type { Locale } from "@/types/i18n";
import type { Project } from "@/types/portfolio";

/**
 * Project names are proper nouns, so they stay as they are — except for the
 * "coming soon" placeholder, whose label is real copy and does get translated.
 */
export const projectName = (project: Project, locale: Locale): string =>
  project.nameLabel ? project.nameLabel[locale] : project.name;
