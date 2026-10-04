"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [blue, setBlue] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("pranesh-theme") === "blue";
    document.documentElement.dataset.theme = saved ? "blue" : "orange";
    setBlue(saved);
  }, []);

  function toggleTheme() {
    const nextBlue = !blue;
    document.documentElement.dataset.theme = nextBlue ? "blue" : "orange";
    localStorage.setItem("pranesh-theme", nextBlue ? "blue" : "orange");
    setBlue(nextBlue);
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${blue ? "orange" : "blue"} theme`} aria-pressed={blue} title={`Switch to ${blue ? "orange" : "blue"} theme`}>
      {blue ? <Sun size={16} /> : <Moon size={16} />}
      <span>{blue ? "Blue" : "Orange"}</span>
    </button>
  );
}
