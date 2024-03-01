import { useState, createContext } from "react";
import { UserContext } from "@/components/UserProvider";
import { useContext } from "react";

export default function Home() {
  const { email } = useContext(UserContext);
  console.log(email);
  return <div className="w-screen h-screen flex relative">home page</div>;
}
