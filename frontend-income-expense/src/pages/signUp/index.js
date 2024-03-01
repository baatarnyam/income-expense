import SignUp from "@/components/SignUp";
import { useContext } from "react";
import { UserContext } from "@/components/UserProvider";
import { useRouter } from "next/navigation";

const signUp = () => {
  const { userEmail } = useContext(UserContext);
  const router = useRouter();

  if (userEmail) {
    router.push("/dashboard");
  }

  return (
    <div>
      <SignUp />
    </div>
  );
};
export default signUp;
