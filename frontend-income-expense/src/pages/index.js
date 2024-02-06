import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const clickedSignUp = () => {
    setClicked((previousState) => !previousState);
  };

  return (
    <div className="w-screen h-screen flex relative">
      {clicked ? <SignUp /> : <SignIn />}

      <div className="w-56 h-8 flex justify-around items-center absolute left-[420px] bottom-1/4">
        <p className="text-sm font-normal  mx-auto">
          {clicked ? "Already have account?" : "Don’t have account?"}
        </p>
        <button
          className="text-sm font-normal text-blue-600"
          onClick={clickedSignUp}
        >
          {clicked ? "Sign in" : "Sign up"}
        </button>
      </div>
    </div>
  );
}
