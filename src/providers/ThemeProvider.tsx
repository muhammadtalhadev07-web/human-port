"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

type ThemeContextType = {
  isLight: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isLight: false,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("hovs-theme");
    if (stored === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsLight((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("light-mode");
        localStorage.setItem("hovs-theme", "light");
      } else {
        document.documentElement.classList.remove("light-mode");
        localStorage.setItem("hovs-theme", "dark");
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
