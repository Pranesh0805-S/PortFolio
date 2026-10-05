"use client";

import { Moon, Sun } from "lucide-react";
import { usePortfolioTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = usePortfolioTheme();
  const blue = theme === "blue";

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${blue ? "orange" : "blue"} theme`} aria-pressed={blue} title={`Switch to ${blue ? "orange" : "blue"} theme`}>
      {blue ? <Sun size={16} /> : <Moon size={16} />}
      <span>{blue ? "Dark blue" : "Orange"}</span>
    </button>
  );
}
