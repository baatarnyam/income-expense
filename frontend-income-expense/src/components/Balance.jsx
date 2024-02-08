import Image from "next/image";
import Button from "./Button";
import Input from "./Input";

const Balance = () => {
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
            <li className="step">Finish</li>
          </ul>
        </div>

        <div className="w-96 h-72 flex flex-col items-center justify-between">
          <Image src="/balance.png" width={48} height={48} />
          <div className="text-2xl font-semibold text-slate-900">
            Set up your cash Balance
          </div>

          {/* <input
            type="text"
            className="w-96 max-w-xs h-12 rounded-md bg-gray-100"
          /> */}
          <Input
            className="w-96 max-w-xs h-12 rounded-md bg-gray-100"
            placeholder="Email"
          />

          <div className="text-xs font-normal text-slate-600">
            How much cash do you have in your wallet?
          </div>
          <Button innerText="Confirm" />
        </div>
      </div>
    </div>
  );
};
export default Balance;
