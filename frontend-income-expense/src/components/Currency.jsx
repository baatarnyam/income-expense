import Image from "next/image";
import Button from "./Button";
import Steps from "./Steps";

const Currency = (props) => {
  const { stage = 1, nextHandle } = props;
  return (
    <div
      className="w-screen h-screen flex flex-col items-center pt-10"
      style={{ display: `${stage === 1 ? "flex" : "none"}` }}
    >
      <div className="w-96 h-1/2 flex flex-col items-center justify-between">
        <div className="w-full h-fit flex flex-col items-center gap-20">
          <div className="w-fit h-fit flex items-center gap-3">
            <div>
              <Image src="/logo.png" width={32} height={32} />
            </div>
            <h1 className="text-2xl font-bold">Geld</h1>
          </div>

          <ul className="steps">
            <li className="step step-info">Currency</li>
            <li className="step">Balance </li>
            <li className="step">Finish</li>
          </ul>
        </div>

        <div className="w-96 h-72 flex flex-col items-center justify-between">
          <Image src="/currency.png" width={48} height={48} />
          <div className="text-2xl font-semibold text-slate-900">
            Select base currency
          </div>

          <select className="select select-bordered w-96 max-w-xs h-12 rounded-md bg-gray-100 px-2 ">
            <option disabled selected>
              MNT-Mongolian Tugrik
            </option>
            <option>MNT-Mongolian Tugrik</option>
            <option>Han Solo</option>
          </select>

          <div className="text-xs font-normal text-slate-600">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </div>
          {/* <Button innerText="Confirm" clickedbutton={nextHandle} /> */}
          <button
            className="w-96 h-12 bg-blue-600 rounded-2xl text-white text-xl"
            onClick={nextHandle}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default Currency;
