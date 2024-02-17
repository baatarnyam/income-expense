import Image from "next/image";

const LastRecords = () => {
  return (
    <div className="w-[1200px] h-[456px] mt-6 border">
      <div className="w-full h-14 pl-6 py-4 text-base font-semibold border">
        Last Records
      </div>
      <div className="w-full h-[400px] flex flex-col px-6">
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
        <hr />
      </div>
    </div>
  );
};
export default LastRecords;
