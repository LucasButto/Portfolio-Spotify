import type { Localized } from "./i18n";

export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education";

export type NavIcon =
  | "home"
  | "user"
  | "sparkles"
  | "briefcase"
  | "grid"
  | "school";

export interface NavItem {
  id: SectionId;
  label: Localized;
  icon: NavIcon;
}

export type SocialIcon = "github" | "linkedin" | "email" | "resume";

export interface SocialLink {
  name: string;
  title: Localized;
  href: string;
  icon: SocialIcon;
  /** Marks the link as a document (the CV) so the browser previews it. */
  isFile?: boolean;
}

export interface Profile {
  name: string;
  role: Localized;
  verified: boolean;
  /** Circular portrait used by the desktop hero and the player bar. */
  avatar: string;
  /** Full-bleed photo behind the mobile hero, Spotify artist-page style. */
  banner: string;
  email: string;
  socials: SocialLink[];
}

export interface AboutInfo {
  title: Localized;
  paragraphs: Localized<string[]>;
}

export interface Skill {
  name: string;
  /** Optional qualifier rendered in parentheses, e.g. "(learning)". */
  note?: Localized;
  logo: string;
  link: string;
}

export interface SkillGroup {
  category: Localized;
  items: Skill[];
}

export interface ExperienceItem {
  role: Localized;
  company: string;
  description: Localized;
  /** `YYYY-MM`, used to compute the period label and the track "duration". */
  start: string;
  /** `YYYY-MM`, or `null` when it is the current job. */
  end: string | null;
  tags: string[];
}

export type ImageAlign = "left" | "center" | "right";

export interface Project {
  id: string;
  name: string;
  /** Overrides `name` when the label itself needs translating. */
  nameLabel?: Localized;
  subtitle: Localized;
  accent: string;
  image: string;
  /** Horizontal focus point for the cover image. Defaults to "center". */
  alignImage?: ImageAlign;
  description?: Localized;
  skills?: string[];
  github?: string;
  link?: string;
  /** Placeholder card for the projects still in the oven. */
  comingSoon?: boolean;
}

export interface EducationItem {
  degree: Localized;
  institution?: string;
  period: string;
  description: Localized;
  type: Localized;
}
