import { useState, createContext } from "react";

export const ColorContext = createContext();

export default function ColorProv({ children }) {
  const [color, setColor] = useState("text");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}
