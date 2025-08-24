import React, { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

export default function ThemeToggle() {
  const [dark, setDark] = useLocalStorage("theme", false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="theme-toggle-btn">
      {/* Toggle */}
      <span
        className={`theme-toggle-circle ${dark ? "translate-x-8" : "translate-x-0"}`}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
