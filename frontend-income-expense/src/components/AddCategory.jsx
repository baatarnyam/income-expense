import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function AddCategory() {
  return (
    <div className="w-full h-[168px] flex flex-col p-6 gap-8">
      <div className="w-[446px] h-[48px] flex justify-between">
        <button className="w-[84px] h-[48px] border rounded-lg bg-gray-100 flex items-center justify-center gap-2">
          <div>home</div>
          <IoMdArrowDropdown />
        </button>

        <div className="w-[350px] h-[48px] border rounded-lg bg-gray-100 flex items-center justify-center px-4">
          <input
            placeholder="name"
            type="text"
            className="w-full h-[45px] bg-gray-100 outline-none"
          ></input>
          <IoMdArrowDropdown />
        </div>
      </div>
      <button className="w-[446px] h-[40px] bg-[#16A34A] rounded-[20px] flex items-center justify-center text-white">
        Add Category
      </button>
    </div>
  );
}
