import React from "react";
import { useState, createContext } from "react";

export const ModalContext = createContext();
export const AddCategoryModalContext = createContext();
export const ChooseCategoryModalContext = createContext();

export default function AddRecord({ children }) {
  const [record, setRecord] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [chooseCategory, setChooseCategory] = useState(false);

  return (
    <ModalContext.Provider value={{ record, setRecord }}>
      <AddCategoryModalContext.Provider value={{ addCategory, setAddCategory }}>
        <ChooseCategoryModalContext.Provider
          value={{ chooseCategory, setChooseCategory }}
        >
          {children}
        </ChooseCategoryModalContext.Provider>
      </AddCategoryModalContext.Provider>
    </ModalContext.Provider>
  );
}
