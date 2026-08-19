import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { copyByLocale } from "@/i18n/copy";
import type { Locale, Localized } from "@/types/i18n";
import { LocaleContext } from "./localeContext";
import type { LocaleContextValue } from "./localeContext";

const STORAGE_KEY = "portfolio-locale";

const isLocale = (value: unknown): value is Locale =>
  value === "es" || value === "en";

/** Stored choice first, then the browser language, English as the fallback. */
const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;

  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
};

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const toggleLocale = useCallback(
    () => setLocale((current) => (current === "es" ? "en" : "es")),
    [],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      copy: copyByLocale[locale],
      tr: <T,>(localized: Localized<T>) => localized[locale],
    }),
    [locale, toggleLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};
