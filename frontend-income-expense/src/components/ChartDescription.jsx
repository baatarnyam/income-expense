import React from "react";

const ChartDescription = (props) => {
  const { text, number, procied, color } = props;
  return (
    <div className="w-full h-5 flex items-center justify-between">
      <div className="w-[153px] flex gap-1 items-center">
        <div
          className={`w-[12px] h-[12px] rounded-full`}
          style={{ backgroundColor: color }}
        ></div>
        <div className="font-normal text-sm text-gray-900">{text}</div>
      </div>

      <div className="w-[120px] font-normal text-sm text-gray-900">
        {number}
      </div>
      <div className="font-normal text-sm text-gray-900">{procied}</div>
    </div>
  );
};

export default ChartDescription;
