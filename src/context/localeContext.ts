import { createContext } from "react";
import type { Copy } from "@/i18n/copy";
import type { Locale, Localized } from "@/types/i18n";

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Interface copy for the active locale. */
  copy: Copy;
  /** Resolves a `Localized` value to the active locale. */
  tr: <T>(value: Localized<T>) => T;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);
