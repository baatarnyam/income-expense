import SignIn from "@/components/SignIn";
import { useContext } from "react";
import { UserContext } from "@/components/UserProvider";
import { useRouter } from "next/router";

const login = () => {
  const { userEmail } = useContext(UserContext);
  const router = useRouter();

  if (userEmail) {
    router.push("/dashboard");
  }

  return (
    <div>
      <SignIn />
    </div>
  );
};
export default login;
