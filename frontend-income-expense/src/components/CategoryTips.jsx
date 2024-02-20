import Image from "next/image";
import { GrView } from "react-icons/gr";
import { IoMdArrowDropright } from "react-icons/io";

export default function CategoryTips(props) {
  const { text } = props;

  return (
    <div className="w-full h-[32px] flex justify-between items-center">
      <div className="flex w-fit h-full justify-evenly items-center gap-4 pl-2">
        <Image src="/Union.png" width={20} height={14} />
        <div className="text-base font-normal text-gray-800">{text}</div>
      </div>

      <IoMdArrowDropright />
    </div>
  );
}
