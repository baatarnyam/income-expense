import React from "react";
import Image from "next/image";

export default function RecordLine(props) {
  const { color, imgLink } = props;
  return (
    <div className="w-full h-[64px] flex items-center justify-between bg-slate-50 rounded-[12px] px-6">
      <div className="w-fit h-[40px] flex gap-4 items-center justify-between">
        <div className="form-control">
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="checkbox checkbox-info border border-gray-300 w-6 h-6"
            />
          </label>
        </div>

        <Image src={`/${imgLink}`} width={40} height={40} />
        <div className="flex flex-col">
          <p className="text-base font-normal">Landing & Renting</p>
          <p className="text-gray-600 text-[12px]">14:00</p>
        </div>
      </div>
      <div className="flex w-16 h-6 gap-2">
        <p className="font-semibold" style={{ color: color }}>
          -
        </p>
        <p className={`font-semibold`} style={{ color: color }}>
          1,000₮
        </p>
      </div>
    </div>
  );
}
