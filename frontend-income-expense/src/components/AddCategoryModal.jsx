import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import AddCategory from "./AddCategory";
import { AddCategoryModalContext } from "./AddRecord";

export default function AddCategoryModal() {
  const { addCategory, setAddCategory } = useContext(AddCategoryModalContext);

  const modalClose = () => {
    setAddCategory(false);
  };

  return (
    <div className=" w-screen h-screen bg-[#0005] absolute top-0 z-10 flex items-center justify-center">
      <div className="w-[494px] h-[236px] rounded-xl bg-white border">
        <div className="w-full h-[62px] flex justify-between items-center px-6">
          <div className="text-xl font-semibold">Add Category</div>
          <button onClick={modalClose}>
            <IoClose className="w-[24px] h-[24px]" />
          </button>
        </div>
        <hr />
        <AddCategory />
      </div>
    </div>
  );
}
