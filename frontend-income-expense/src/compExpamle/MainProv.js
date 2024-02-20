import React from "react";
import { useState, createContext } from "react";

export const NameText = createContext();

export default function MainProv({ children }) {
  const [text, setText] = useState("thhhhhhhext");

  return (
    <NameText.Provider value={{ text, setText }}>{children}</NameText.Provider>
  );
}
