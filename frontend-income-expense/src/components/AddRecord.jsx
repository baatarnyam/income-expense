import React from "react";
import { useState, createContext } from "react";

export const ModalContext = createContext();

export default function AddRecord({ children }) {
  const [record, setRecord] = useState(false);

  return (
    <ModalContext.Provider value={{ record, setRecord }}>
      {children}
    </ModalContext.Provider>
  );
}
