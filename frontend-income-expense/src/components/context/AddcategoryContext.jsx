import React from "react";
import { createContext, useState } from "react";

export const AddCategoryModalContext = createContext();

export default function AddcategoryContext({ children }) {
  const [addCategory, setAddCategory] = useState(false);
  return (
    <AddCategoryModalContext.Provider value={{ addCategory, setAddCategory }}>
      {children}
    </AddCategoryModalContext.Provider>
  );
}
