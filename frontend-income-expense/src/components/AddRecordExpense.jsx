import React from "react";
import { useState } from "react";
import AddRecordIncome from "./AddRecordIncome";

export default function AddRecordExpense() {
  const [expenseType, setExpenseType] = useState(true);

  const handleClick = () => {
    setExpenseType(expenseType);
  };

  return (
    <div className="flex w-full h-[444px]">
      <div className="w-1/2 h-full flex flex-col justify-between py-5 px-6">
        <div className="w-[347px] h-[40px] flex justify-between bg-gray-100 rounded-[100px]">
          <button
            className={`w-1/2 h-full rounded-[20px] text-base font-normal bg-blue-600 text-white`}
          >
            Expense
          </button>

          <button
            onClick={{ handleClick }}
            className={`w-1/2 h-full rounded-[20px] text-base font-normal`}
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

            <select className="select select-bordered select-sm w-[342px] h-[30px] bg-gray-50">
              <option disabled selected className="text-base font-semibold">
                Choose
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          <div className="w-full h-[72px] flex justify-between">
            <div className="w-[168px] h-full flex flex-col justify-between ">
              <div text-base font-normal>
                Date
              </div>

              <select className="select select-bordered select-sm w-full bg-gray-50">
                <option disabled selected className="text-base font-semibold">
                  Oct 30, 2023
                </option>
                <option>Sep 30, 2023</option>
                <option>Aug 30, 2023</option>
              </select>
            </div>

            <div className="w-[168px] h-full flex flex-col justify-between">
              <div text-base font-normal>
                Date
              </div>

              <select className="select select-bordered select-sm w-full bg-gray-50">
                <option disabled selected className="text-base font-semibold">
                  14:00 PM
                </option>
                <option>14:15 PM</option>
                <option>14:20 PM</option>
              </select>
            </div>
          </div>

          <button className="w-full h-[40px] bg-blue-600 text-white rounded-[20px]">
            Add Record
          </button>
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col justify-between p-6 ">
        <div className="w-full h-[76px] flex flex-col justify-between ">
          <div className="text-base font-normal text-gray-800">Payee</div>

          <select className="select select-bordered select-md w-full bg-gray-50">
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
