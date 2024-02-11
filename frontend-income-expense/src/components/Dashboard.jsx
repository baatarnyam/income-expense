import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-100">
      <div className="w-[1440px] h-[72px] flex items-center justify-between bg-white rounded-lg mt-2">
        <div className="w-56 h-10 flex items-center gap-6">
          <Image src="/logo.png" width={40} height={40} />
          <div className="text-base font-semibold">Dashboard</div>
          <div>Records</div>
        </div>
        <div className="w-56 h-10 flex items-center gap-6">
          <button className="w-[100px] h-8 bg-blue-600 rounded-2xl flex justify-evenly items-center text-white">
            <PiPlus className="w-6 h-6" />
            Records
          </button>
          <Image src="/dash-profile.png" width={40} height={40} />
        </div>
      </div>

      <div className="w-[1200px] h-[216px] flex justify-between mt-8">
        <Image src="/card.png" width={384} height={216} />

        <div className="w-[384px] h-[216px] rounded-xl overflow-hidden bg-white">
          <div className="w-full h-14 flex gap-2 items-center pl-[24px]">
            <GoDotFill className="text-green-600" />
            <p className="text-base font-semibold">Your Income</p>
          </div>
          <hr />
          <div className="w-full h-[160px] flex flex-col pl-[24px] py-[20px] justify-between">
            <div className="text-4xl font-semibold">1200000₮</div>
            <div className="mb-[20px] text-lg font-normal text-gray-500">
              Your income Amount
            </div>
            <div className="w-[200px] h-[28px] flex items-center justify-between text-lg font-normal">
              <Image src="/arrowUp.png" width={24} height={24} />
              <p>32% from last month</p>
            </div>
          </div>
        </div>

        <div className="w-[384px] h-[216px] rounded-xl overflow-hidden bg-white">
          <div className="w-full h-14 flex gap-2 items-center pl-[24px]">
            <GoDotFill className="text-blue-600" />
            <p className="text-base font-semibold">Total Expenses</p>
          </div>
          <hr />
          <div className="w-full h-[160px] flex flex-col pl-[24px] py-[20px] justify-between">
            <div className="text-4xl font-semibold">-1200000₮</div>
            <div className="mb-[20px] text-lg font-normal text-gray-500">
              Your income Amount
            </div>
            <div className="w-[200px] h-[28px] flex items-center justify-between text-lg font-normal">
              <Image src="/arrowDown.png" width={24} height={24} />
              <p>32% from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;