import Image from "next/image";
import Button from "./Button";
import Input from "./Input";

const Finish = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center pt-10">
      <div className="w-96 h-1/2 flex flex-col items-center justify-between ">
        <div className="w-full h-fit flex flex-col items-center gap-20">
          <div className="w-fit h-fit flex items-center gap-3">
            <div>
              <Image src="/logo.png" width={32} height={32} />
            </div>
            <h1 className="text-2xl font-bold">Geld</h1>
          </div>

          <ul className="steps">
            <li className="step step-info">Currency</li>
            <li className="step step-info">Balance </li>
            <li className="step step-info">Finish</li>
          </ul>
        </div>

        <div className="w-96 h-60 flex flex-col items-center justify-between">
          <Image src="/goodJob.png" width={48} height={48} />
          <div className="text-2xl font-semibold text-slate-900">
            Set up your cash Balance
          </div>

          <div className="text-base font-normal text-slate-600 text-center">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </div>
          <Button innerText="Go to Dashboard" />
        </div>
      </div>
    </div>
  );
};
export default Finish;
