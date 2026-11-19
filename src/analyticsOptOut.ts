// Valor secreto único: entrar con ?notrack=<SECRET> excluye este navegador de Analytics.
const NOTRACK_SECRET = "lucas-views";
const FLAG_KEY = "va-disable";

const getNotrackParam = (): string | null => {
  try {
    return new URLSearchParams(window.location.search).get("notrack");
  } catch {
    return null;
  }
};

const hasOptOutFlag = (): boolean => {
  try {
    return localStorage.getItem(FLAG_KEY) !== null;
  } catch {
    return false;
  }
};

export const beforeSend = <T>(event: T): T | null => {
  if (hasOptOutFlag() || getNotrackParam() === NOTRACK_SECRET) {
    return null;
  }
  return event;
};

// Se ejecuta una sola vez al cargar la app (desde main.tsx).
export const handleNotrackParam = (): void => {
  const value = getNotrackParam();
  if (value === null) return;

  try {
    if (value === NOTRACK_SECRET) {
      localStorage.setItem(FLAG_KEY, "1");
      alert("Listo, este navegador ya no se cuenta");
    } else if (value === "off") {
      localStorage.removeItem(FLAG_KEY);
      alert("Este navegador vuelve a contarse");
    }
  } catch {
    // localStorage no disponible: no se hace nada.
  }

  try {
    const url = new URL(window.location.href);
    url.searchParams.delete("notrack");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  } catch {
    // ignorar
  }
};
