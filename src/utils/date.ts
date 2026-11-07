import type { Copy } from "@/i18n/copy";
import type { Locale } from "@/types/i18n";

/**
 * Helpers to turn the `YYYY-MM` fields of the experience data into the period
 * label and the "track duration" the player-style list shows on the right.
 */

const MONTHS: Record<Locale, string[]> = {
  en: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  es: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ],
};

const parseMonth = (value: string): Date => {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1, 1);
};

const formatMonth = (value: string, locale: Locale): string => {
  const date = parseMonth(value);
  return `${MONTHS[locale][date.getMonth()]} ${date.getFullYear()}`;
};

/** Whole months between two `YYYY-MM` marks, both ends included. */
export const monthsBetween = (start: string, end: string | null): number => {
  const from = parseMonth(start);
  const to = end ? parseMonth(end) : new Date();
  const months =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth());
  return Math.max(months + 1, 1);
};

/** `Nov 2024 - Current`, `Nov 2023 - Nov 2024`, `Oct 2023`… */
export const formatPeriod = (
  start: string,
  end: string | null,
  locale: Locale,
  copy: Copy,
): string => {
  const from = formatMonth(start, locale);

  if (!end) return `${from} - ${copy.experience.current}`;
  if (end === start) return from;

  return `${from} - ${formatMonth(end, locale)}`;
};

/** `1 yr 10 mo`, `11 mo`, `1 año 10 meses`… */
export const formatDuration = (
  start: string,
  end: string | null,
  copy: Copy,
): string => {
  const months = monthsBetween(start, end);
  const years = Math.floor(months / 12);
  const rest = months % 12;

  const monthLabel = rest === 1 ? copy.date.month : copy.date.months;
  const yearLabel = years === 1 ? copy.date.year : copy.date.years;

  if (years === 0) return `${rest} ${monthLabel}`;
  if (rest === 0) return `${years} ${yearLabel}`;
  return `${years} ${yearLabel} ${rest} ${monthLabel}`;
};

/** Full years of professional experience, floored (`2`, `3`…). */
export const yearsSince = (start: string): number =>
  Math.floor(monthsBetween(start, null) / 12);
