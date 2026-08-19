import { useContext } from "react";
import { LocaleContext } from "@/context/localeContext";
import type { LocaleContextValue } from "@/context/localeContext";

export const useI18n = (): LocaleContextValue => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useI18n must be used inside a <LocaleProvider>");
  }

  return context;
};
