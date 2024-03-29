import React from "react";
import { useState } from "react";
import ChooseCategory from "./ChooseCategory";

export default function AddRecordExpense() {
  const [expenseType, setExpenseType] = useState(true);

  const handleClick = () => {
    setExpenseType(!expenseType);
  };

  return (
    <div className="flex w-full h-[444px]">
      <div className="w-1/2 h-full flex flex-col justify-between py-5 px-6">
        <div className="w-[347px] h-[40px] flex justify-between bg-gray-100 rounded-[100px]">
          <button
            className="w-1/2 h-full rounded-[20px] text-base font-normal"
            style={{
              backgroundColor: expenseType ? "#0166FF" : "#F3F4F6",
              color: expenseType ? "white" : "black",
            }}
            onClick={handleClick}
          >
            Expense
          </button>

          <button
            className="w-1/2 h-full rounded-[20px] text-base font-normal"
            style={{
              backgroundColor: expenseType ? "#F3F4F6" : "#16A34A",
              color: expenseType ? "black" : "white",
            }}
            onClick={handleClick}
          >
            Income
          </button>
        </div>
        <div className="w-[348px] h-[340px] flex flex-col justify-between">
          <div className="w-full h-[76px] flex flex-col rounded-lg justify-center gap-2 px-6 bg-gray-100">
            <div className="text-base font-normal">Amount</div>
            <input
              placeholder="₮ 000.0"
              type="number"
              className="bg-gray-100"
            ></input>
          </div>

          <div className="w-full h-[70px] flex flex-col justify-between">
            <div className="text-base font-normal">Category</div>
            <ChooseCategory />
          </div>

          <div className="w-full h-[72px] flex justify-between">
            <div className="w-[168px] h-full flex flex-col justify-between ">
              <div text-base font-normal>
                Date
              </div>

              <input
                className="w-full h-[35px] rounded-lg border bg-gray-50"
                type="date"
              />
            </div>

            <div className="w-[168px] h-full flex flex-col justify-between">
              <div text-base font-normal>
                Date
              </div>

              <input
                className="w-full h-[35px] rounded-lg border bg-gray-50"
                type="time"
              />
            </div>
          </div>

          <button
            className="w-full h-[40px] bg-blue-600 text-white rounded-[20px]"
            style={{ backgroundColor: expenseType ? "#0166FF" : "#16A34A" }}
          >
            Add Record
          </button>
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col justify-between p-6 ">
        <div className="w-full h-[76px] flex flex-col justify-between ">
          <div className="text-base font-normal text-gray-800">Payee</div>

          <select className="select select-bordered w-full h-[40px] rounded-lg border bg-gray-50">
            <option disabled selected className="text-base font-semibold">
              write here
            </option>
            <option>select</option>
            <option>select</option>
          </select>
        </div>

        <div className="w-full h-[310px] flex flex-col justify-between ">
          <div className="text-base font-normal text-gray-800">Note</div>
          <textarea
            placeholder="write here"
            className="w-full h-[280px] border rounded-xl bg-gray-100 p-6"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
