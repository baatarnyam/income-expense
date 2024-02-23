import React from "react";
import Image from "next/image";

export default function LastRecordLine() {
  return (
    <div className="w-full h-[80px] flex items-center justify-between">
      <div className="w-[185px] h-[40px] flex items-center justify-between">
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
  );
}
