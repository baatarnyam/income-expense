import index from "@/pages/comp";
import React from "react";
import { GoHomeFill } from "react-icons/go";

export default function ChooseCategory() {
  const categoryOptions = [
    {
      img: <GoHomeFill className="w-[25px] h-[25px]" />,
      text: "Home",
    },
    { img: <GoHomeFill className="w-[25px] h-[25px] border" />, text: "Gift" },
    { img: <GoHomeFill className="w-[25px] h-[25px]" />, text: "Food" },
    { img: <GoHomeFill className="w-[25px] h-[25px]" />, text: "Drink" },
    { img: <GoHomeFill className="w-[25px] h-[25px]" />, text: "Taxi" },
    { img: <GoHomeFill className="w-[25px] h-[25px]" />, text: "Shopping" },
  ];
  return (
    <div>
      {/* <select
        aria-placeholder="Choose"
        className="w-[342px] h-[35px] rounded-lg border bg-gray-50"
      >
        <option disabled selected className="text-base font-semibold">
          Choose
        </option>
        {categoryOptions.map(({ text, img }, index) => {
          return (
            <option key={index} className="flex gap-2">
              {img}
              {text}
            </option>
            // <div key={index} className="flex gap-2">
            //   {img}
            //   {text}
            // </div>
          );
        })}
      </select> */}

      <div className="w-[342px] h-[35px] rounded-lg border bg-gray-50">
        <div disabled selected className="text-base font-semibold">
          Choose
        </div>

        {categoryOptions.map(({ text, img }, index) => {
          return (
            <div key={index} className="flex gap-2">
              {img}
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
