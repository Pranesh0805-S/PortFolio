"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "orange" | "blue";
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("orange");

  useEffect(() => {
    const saved = localStorage.getItem("pranesh-theme");
    const initial: Theme = saved === "blue" ? "blue" : "orange";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = document.documentElement.dataset.theme === "blue" ? "orange" : "blue";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("pranesh-theme", next);
    setTheme(next);
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function usePortfolioTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("usePortfolioTheme must be used inside ThemeProvider");
  return context;
}
