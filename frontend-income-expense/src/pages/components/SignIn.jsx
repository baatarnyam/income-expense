import Image from "next/image";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const SignIn = () => {
  const [userData, setUserData] = useState({});
  const { push } = useRouter;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const ClickedButton = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/login", userData).then((res) => {
        console.log(res.data);
        if (res.data !== "Invalid email or password") {
          // push("/");
        } else {
          alert(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex ">
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-96 h-[360px] flex flex-col items-center justify-between">
          <div className="w-24 h-9 flex items-center justify-around">
            <div>
              <Image src="/logo.png" width={24} height={24} />
            </div>
            <h1 className="text-2xl font-bold">Geld</h1>
          </div>

          <div className="w-72 h-16 flex flex-col items-center justify-between">
            <h1 className="text-2xl font-semibold">Welcome Back</h1>
            <h1 className="text-sm font-normal">
              Welcome back, Please enter your details
            </h1>
          </div>

          <div className="w-fit h-48 flex flex-col justify-between">
            <Input
              placeholder="Email"
              type="text"
              handleChange={handleChange}
              name="email"
            />
            <Input
              placeholder="Password"
              type="password"
              handleChange={handleChange}
              name="password"
            />

            <Button innerText="Log in" ClickedButton={ClickedButton} />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-600"></div>
    </div>
  );
};
export default SignIn;
