



import React, { createContext, useEffect, useState } from "react";
import { theme1 } from "../themes/Theme1";
import { theme2 } from "../themes/Theme2";
import { theme3 } from "../themes/Theme3";

export type ThemeType = typeof theme1;

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = [theme1, theme2, theme3];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(theme1);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      const found = themes.find((t) => t.name === saved);
      if (found) setThemeState(found);
    }
  }, []);

  const setTheme = (t: ThemeType) => {
    setThemeState(t);
    localStorage.setItem("theme", t.name);
    // optional: update document root vars
    document.documentElement.style.setProperty("--bg", t.background);
    document.documentElement.style.setProperty("--text", t.text);
  };

  // set initial css vars
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", theme.background);
    document.documentElement.style.setProperty("--text", theme.text);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
