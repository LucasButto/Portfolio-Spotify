export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];

/** A value that exists in both languages, e.g. `{ en: "Skills", es: "Skills" }`. */
export type Localized<T = string> = Record<Locale, T>;
