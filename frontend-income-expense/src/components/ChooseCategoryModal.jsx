import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { PiPlus } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { FaGift } from "react-icons/fa6";
import { PiForkKnifeFill } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";
import { PiTaxiFill } from "react-icons/pi";
import { PiTShirtFill } from "react-icons/pi";
import { AddCategoryModalContext } from "./AddRecord";
import { ChooseCategoryModalContext } from "./AddRecord";

export default function ChooseCategoryModal() {
  const { addCategory, setAddCategory } = useContext(AddCategoryModalContext);

  const handleAddCategory = () => {
    setAddCategory(true);
  };

  const { chooseCategory, setChooseCategory } = useContext(
    ChooseCategoryModalContext
  );

  const handleModalClose = () => {
    setChooseCategory(false);
    // console.log("hello");
  };

  const categoryOptions = [
    {
      img: <GoHomeFill className="w-[25px] h-[25px] text-[#0166FF]" />,
      text: "Home",
    },
    {
      img: <FaGift className="w-[25px] h-[25px] text-[#FF4545]" />,
      text: "Gift",
    },
    {
      img: <PiForkKnifeFill className="w-[25px] h-[25px] text-[#FB8A22]" />,
      text: "Food",
    },
    {
      img: <TbGlassFull className="w-[25px] h-[25px] text-[#A804AB]" />,
      text: "Drink",
    },
    {
      img: <PiTaxiFill className="w-[25px] h-[25px] text-[#EAB308]" />,
      text: "Taxi",
    },
    {
      img: <PiTShirtFill className="w-[25px] h-[25px] text-[#6F6CF3]" />,
      text: "Shopping",
    },
  ];

  return (
    <div>
      <div className=" w-screen h-screen absolute top-[262px] right-[200px] z-10 flex items-center justify-center">
        <div className="w-[342px] h-max-[360px] rounded-xl bg-white">
          <div className="w-full h-[56px] flex justify-between items-center px-4 gap-4">
            <div
              className="w-fit h-[32px] flex items-center gap-4 cursor-pointer"
              onClick={handleAddCategory}
            >
              <div className="w-6 h-6 rounded-full bg-[#0166FF] flex items-center justify-center">
                <PiPlus className="w-4 h-4 text-white" />
              </div>
              <div className="text-base font-normal ">Add Category</div>
            </div>

            <IoClose
              className="w-[18px] h-[18px] cursor-pointer border"
              onClick={handleModalClose}
            />
          </div>
          <hr />

          {categoryOptions.map(({ text, img }, index) => {
            return (
              <div key={index} className="flex gap-2 w-full h-14 p-4">
                <div>{img}</div>
                <div className="text-base font-normal">{text}</div>
              </div>
            );
          })}
        </div>

        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
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
    </div>
  );
}
