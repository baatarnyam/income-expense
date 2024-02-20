import React from "react";
import { useState, createContext } from "react";

export const ThemeChange = createContext();

export default function Context({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeChange.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeChange.Provider>
  );
}
