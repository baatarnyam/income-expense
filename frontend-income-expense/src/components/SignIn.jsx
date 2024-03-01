import Image from "next/image";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const SignIn = () => {
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

    try {
      await axios
        .post("http://localhost:8000/login", userData)
        .then((response) => {
          console.log(response.data);

          const setItem = () => {
            localStorage.setItem("loginToken", response.data.accessToken);
          };
          setItem();

          if (
            response.data !== "User not found" &&
            response.data !== "Email or password is wrong"
          ) {
            router.push("/dashboard");
          } else {
            setError(response.data);
          }
        });
    } catch (error) {
      // alert(error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <div className="w-screen h-screen flex ">
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
          <form onSubmit={ClickedButton} action="">
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
              {error && <div className="text-red-500 text-[12px]">{error}</div>}

              <Button innerText="Log in" type="submit" />
            </div>
          </form>

          <div className="w-56 h-8 flex justify-around items-center mt-5 ">
            <p className="text-sm font-normal  mx-auto">Don’t have account?</p>
            <Link href={`/signUp`}>
              <button className="text-sm font-normal text-blue-600">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-600"></div>
    </div>
  );
};
export default SignIn;
