import Image from "next/image";
import LastRecordLine from "./LastRecordLine";

const LastRecords = (props) => {
  const { width, height } = props;
  return (
    <div className={`w-${width} h-${height} mt-6 bg-white rounded-t-xl`}>
      <div className="w-full h-14 pl-6 py-4 text-base font-semibold">
        Last Records
      </div>
      <hr />

      <div className="w-full h-[400px] flex flex-col px-6">
        <LastRecordLine />
        <hr />
        <LastRecordLine />
        <hr />
        <LastRecordLine />
        <hr />
        <LastRecordLine />
        <hr />
        <LastRecordLine />
      </div>
    </div>
  );
};
export default LastRecords;
