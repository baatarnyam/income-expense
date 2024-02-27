import index from "@/pages/comp";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import ChooseCategoryModal from "./ChooseCategoryModal";

export default function ChooseCategory() {
  const [chooseCategory, setChooseCategory] = useState(false);

  const handleChooseCategory = () => {
    setChooseCategory(!chooseCategory);
  };

  return (
    <div>
      <div className="w-[342px] h-[35px] rounded-lg border bg-gray-50 flex items-center justify-between px-4">
        <div className="text-base font-normal text-gray-400">Choose</div>
        <IoMdArrowDropdown
          className="cursor-pointer"
          onClick={handleChooseCategory}
        />

        {chooseCategory && <ChooseCategoryModal />}
      </div>
      {/* 
      <div className="dropdown">
        <div role="button" tabIndex={0} className="btn m-1">
          Click
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
