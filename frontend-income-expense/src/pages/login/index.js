import SignIn from "@/components/SignIn";
import { useContext } from "react";
import { UserContext } from "@/components/UserProvider";
import { useRouter } from "next/navigation";

const login = () => {
  const userEmail = useContext(UserContext);
  const router = useRouter();

  if (userEmail) {
    router.push("/");
  }
  return (
    <div>
      <SignIn />
    </div>
  );
};
export default login;
