import React from "react";
import Image from "next/image";
import RecordLine from "./RecordLine";

export default function RecordData(props) {
  const { width, height } = props;
  return (
    <div className={`w-${width} h-${height} mt-6 bg-white rounded-t-xl`}>
      <div className="w-full h-[400px] flex flex-col px-6">
        <div className="w-full h-[80px] flex items-center justify-between">
          <div className="w-fit h-[40px] flex items-center justify-between gap-4">
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info border border-gray-300 w-6 h-6"
                />
              </label>
            </div>

            <Image src="/homeicon.png" width={40} height={40} />
            <div className="flex flex-col">
              <p className="text-base font-normal">Landing & Renting</p>
              <p className="text-gray-600 text-[12px]">3 hours ago</p>
            </div>
          </div>
          <div className="flex w-16 h-6 gap-2">
            <p className="text-lime-500 font-semibold">-</p>
            <p className="text-lime-500 font-semibold">1,000₮</p>
          </div>
        </div>
        <hr />

        <div className="w-full h-[80px] flex items-center justify-between">
          <div className="w-fit h-[40px] flex gap-4 items-center justify-between">
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info border border-gray-300 w-6 h-6"
                />
              </label>
            </div>

            <Image src="/FoodIcon.png" width={40} height={40} />
            <div className="flex flex-col">
              <p className="text-base font-normal">Landing & Renting</p>
              <p className="text-gray-600 text-[12px]">3 hours ago</p>
            </div>
          </div>

          <div className="flex w-16 h-6 gap-2">
            <p className="text-lime-500 font-semibold">-</p>
            <p className="text-lime-500 font-semibold">1,000₮</p>
          </div>
        </div>
        <hr />

        {/* <RecordLine link="FoodIcon" /> */}
      </div>
    </div>
  );
}
