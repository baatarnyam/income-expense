import SignUp from "@/components/SignUp";
import Currency from "@/components/Currency";
import Balance from "@/components/Balance";
import Finish from "@/components/Finish";
import { useContext, useState } from "react";
import { UserContext } from "@/components/UserProvider";
import { useRouter } from "next/navigation";

const signUp = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const { userEmail } = useContext(UserContext);
  const router = useRouter();

  if (userEmail) {
    router.push("/dashboard");
  }

  return (
    // <div>
    //   <SignUp />
    // </div>

    <div className="w-full h-screen flex flex-col  items-center">
      <div className="w-full h-screen flex ">
        <div className="w-full h-screen flex justify-center ">
          {step === 0 && <SignUp stage={step} nextHandle={handleNext} />}
          {step === 1 && <Currency stage={step} nextHandle={handleNext} />}
          {step === 2 && <Balance stage={step} nextHandle={handleNext} />}
          {step === 3 && <Finish stage={step} />}
        </div>
      </div>
    </div>
  );
};
export default signUp;
