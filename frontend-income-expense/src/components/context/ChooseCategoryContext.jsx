import React from "react";
import { createContext, useState } from "react";

export const ChooseCategoryModalContext = createContext();

export default function ChooseCategoryContext({ children }) {
  const [chooseCategory, setChooseCategory] = useState(false);
  return (
    <ChooseCategoryModalContext.Provider
      value={{ chooseCategory, setChooseCategory }}
    >
      {children}
    </ChooseCategoryModalContext.Provider>
  );
}
