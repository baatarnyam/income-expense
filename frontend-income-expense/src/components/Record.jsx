import React from "react";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import Link from "next/link";
import CategoryTips from "./CategoryTips";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import RecordLine from "./RecordLine";

// import RecordData from "./RecordData";
import { ModalContext } from "./AddRecord";
import { useContext } from "react";
import Modal from "./Modal";

function Record() {
  const { record, setRecord } = useContext(ModalContext);

  const handler = () => {
    setRecord(!record);
  };

  return (
    <div className=" w-screen h-screen relative">
      <div>
        {record && (
          <div>
            <Modal />
          </div>
        )}
      </div>
      <div className="w-screen h-fit flex flex-col items-center bg-slate-100 absolute z-0">
        <div className="w-[1440px] h-[72px] flex items-center justify-between bg-white rounded-lg mt-2 px-6">
          <div className="w-56 h-10 flex items-center gap-6">
            <Image src="/logo.png" width={40} height={40} />
            <Link href="./dashboard">Dashboard</Link>

            <div className="text-base font-semibold">Records</div>
          </div>
          <div className="w-56 h-10 flex items-center gap-6">
            <button
              onClick={handler}
              className="w-[100px] h-8 bg-blue-600 rounded-2xl flex justify-evenly items-center text-white"
            >
              <PiPlus className="w-6 h-6" />
              Records
            </button>
            <Image src="/dash-profile.png" width={40} height={40} />
          </div>
        </div>

        <div className="w-[1200px] h-[1080px] flex gap-6 mt-6">
          <div className="w-[282px] h-full flex flex-col px-4 gap-6 rounded-lg bg-white">
            <div className="w-[250px] h-[88px] flex flex-col justify-between ">
              <div className="text-2xl font-semibold">Record</div>
              <button
                onClick={handler}
                className="w-full h-8 bg-blue-600 rounded-[20px] flex justify-center items-center gap-3 text-white"
              >
                <PiPlus className="w-6 h-6" />
                Add
              </button>
            </div>

            <input
              className="w-[250px] h-8 rounded-md bg-slate-100 px-4 border text-neutral-400"
              placeholder="Search"
            ></input>

            <div className="w-full h-[144px] flex flex-col gap-4 ">
              <div className="text-base font-semibold">Types</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-[16px] h-[16px] rounded-full border border-slate-300"></div>
                  <div className="text-base font-normal">All</div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-[16px] h-[16px] rounded-full border border-slate-300"></div>
                  <div className="text-base font-normal">Income</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[16px] h-[16px] rounded-full border border-slate-300"></div>
                  <div className="text-base font-normal">Expense</div>
                </div>
              </div>
            </div>

            <div className="w-[250px] h-[520px] flex flex-col gap-4 ">
              <div className="w-full h-[32px] flex items-center justify-between">
                <div className="text-base font-semibold">Category</div>
                <div className="text-gray-600 font-normal text-base">clear</div>
              </div>

              <div className="w-full h-[472px] flex flex-col gap-2 ">
                <CategoryTips text="Food & Drinks" />
                <CategoryTips text="Shopping" />
                <CategoryTips text="Housing" />
                <CategoryTips text="Transfortation" />
                <CategoryTips text="Vehicle" />
                <CategoryTips text="Life & Entertainment" />
                <CategoryTips text="Communication, PC" />
                <CategoryTips text="Investment" />
                <CategoryTips text="Income" />
                <CategoryTips text="Others" />
              </div>

              <div className="w-full h-[32px] flex items-center gap-5 pl-2">
                <PiPlus className="w-6 h-6 text-blue-600" />
                <div className="text-base font-normal">Add Category</div>
              </div>

              <div className="w-[245px] h-[152px] flex flex-col gap-4">
                <div className="text-base font-semibold">Amount Range</div>
                <div className="w-full h-[112px] flex flex-col gap-4">
                  <div className="w-[245px] h-[48px] flex gap-4">
                    <div className="w-[115px] h-[48px] bg-gray-100 rounded-lg flex items-center pl-4">
                      0
                    </div>

                    <div className="w-[115px] h-[48px] bg-gray-100 rounded-lg flex items-center pl-4">
                      1000
                    </div>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max="100"
                    value="40"
                    className="range range-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[894px] h-full flex flex-col gap-6">
            <div className="w-full h-[48px] flex justify-between items-center">
              <div className="w-[188px] h-[34px] flex justify-between items-center">
                <button className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                  <MdKeyboardArrowLeft />
                </button>
                <div className="text-sm font-normal">Last 30 Days</div>
                <button className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                  <MdKeyboardArrowRight />
                </button>
              </div>

              <select className="select select-bordered w-[180px] max-w-xs bg-gray-50">
                <option disabled selected className="text-base font-semibold">
                  Newest first
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>

            <div className="w-full h-[48px] flex justify-between items-center px-6">
              <div className="w-[105px] h-6 text-base font-normal flex justify-between items-center ">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info border border-gray-300 w-6 h-6"
                    />
                  </label>
                </div>
                <div>Sellect All</div>
              </div>
              <div className="text-sm font-semibold text-gray-400 flex justify-between items-center gap-2">
                <p>-</p>
                <p>35,000₮</p>
              </div>
            </div>

            <div className="w-full h-fit flex flex-col gap-3">
              <div className="text-base font-semibold">Today</div>
              <RecordLine color="#23E01F" imgLink="homeIcon.png" />
              <RecordLine color="#23E01F" imgLink="FoodIcon.png" />
              <RecordLine color="#23E01F" imgLink="FoodIcon.png" />
              <RecordLine color="#F54949" imgLink="FoodIcon.png" />
              <RecordLine color="#F54949" imgLink="FoodIcon.png" />
            </div>

            <div className="w-full h-fit flex flex-col gap-3">
              <div className="text-base font-semibold">Yesterday</div>
              <RecordLine color="#EAB308" imgLink="homeIcon.png" />
              <RecordLine color="#EAB308" imgLink="homeIcon.png" />
              <RecordLine color="#EAB308" imgLink="homeIcon.png" />
              <RecordLine color="#EAB308" imgLink="homeIcon.png" />
              <RecordLine color="#EAB308" imgLink="homeIcon.png" />
              <RecordLine color="#EAB308" imgLink="homeIcon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Record;
