import React, { useState } from "react";
import AddRecordExpense from "./AddRecordExpense";
import AddRecordIncome from "./AddRecordIncome";
import { IoClose } from "react-icons/io5";
import { ModalContext } from "./AddRecord";
import { useContext } from "react";

export default function Modal() {
  const { record, setRecord } = useContext(ModalContext);

  const modalClose = () => {
    setRecord(false);
  };

  return (
    <div className=" w-screen h-screen bg-[#0005] absolute top-0 z-10 flex items-center justify-center">
      <div className="w-[792px] h-[512px] rounded-xl bg-white border">
        <div className="w-full h-[62px] flex justify-between items-center px-6">
          <div className="text-xl font-semibold">Add Record</div>
          <button onClick={modalClose}>
            <IoClose className="w-[24px] h-[24px]" />
          </button>
        </div>
        <hr />
        <AddRecordExpense />
        {/* <AddRecordIncome /> */}
      </div>
    </div>
  );
}
