import Image from "next/image";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";

import axios from "axios";
import { useRouter } from "next/router";

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const ClickedButton = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.RePassword) {
      setError("Password and Re-Password ...");
      return;
    }

    try {
      await axios
        .post("http://localhost:8000/users", userData)
        .then((response) => {
          // console.log(response.data);

          if (response.data !== "User already existed") {
            router.push("/login");
          }
        });
    } catch (error) {
      setError(error.response.data);
      // setError(...error, err);
      // console.log(err);
    }
  };

  return (
    <div className="w-full h-full flex ">
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-96 h-fit flex flex-col items-center gap-[15px]">
          <div className="w-24 h-9 flex items-center justify-around">
            <div>
              <Image src="/logo.png" width={24} height={24} />
            </div>
            <h1 className="text-2xl font-bold">Geld</h1>
          </div>

          <div className="w-72 h-16 flex flex-col items-center justify-between ">
            <h1 className="text-2xl font-semibold">Welcome Back</h1>
            <h1 className="text-sm font-normal">
              Welcome back, Please enter your details
            </h1>
          </div>

          <form onSubmit={ClickedButton} action="">
            <div className="w-fit h-fit flex flex-col gap-[8px] ">
              <Input
                placeholder="Name"
                type="text"
                handleChange={handleChange}
                name="username"
              />

              <Input
                placeholder="Email"
                type="email"
                handleChange={handleChange}
                name="email"
              />

              <Input
                placeholder="Password"
                type="password"
                handleChange={handleChange}
                name="password"
              />

              <Input
                placeholder="Re-Password"
                type="password"
                handleChange={handleChange}
                name="RePassword"
              />
              {error && (
                <div className="text-red-500 text-[12px] flex justify-center">
                  {error}
                </div>
              )}

              <Button innerText="Sign Up" type="submit" />
            </div>
          </form>

          {/* <div className="w-56 h-8 flex justify-around items-center absolute bottom-1/4">
            <p className="text-sm font-normal  mx-auto">
              Already have account?
            </p>
            <Link>
              <button
                className="text-sm font-normal text-blue-600"
                onClick={clickedSignUp}
              >
                Sign in
              </button>
            </Link> 
          </div> */}
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-600"></div>
    </div>
  );
};

export default SignUp;
