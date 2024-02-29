import Dashboard from "@/components/Dashboard";
import { UserContext } from "@/components/UserProvider";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const dashboard = () => {
  // const { userEmail } = useContext(UserContext);

  // console.log(userEmail);
  return (
    <div>
      <Dashboard />
    </div>
  );
};
export default dashboard;
