import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("loginToken");

    if (!token) {
      router.push("/login");
      return;
    }

    const verifyToken = async () => {
      try {
        const result = await axios.post(
          "http://localhost:8000/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserEmail(result?.data);
        router.push("/");
      } catch (error) {
        localStorage.removeItem("loginToken");
        router.push("/login");
      }
    };
    verifyToken();
  }, []);

  return (
    <UserContext.Provider value={{ userEmail }}>
      {children}
    </UserContext.Provider>
  );
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQGdtYWlsLmNvbSIsImlhdCI6MTcwNzE4ODM3MiwiZXhwIjoxNzA3Mjc0NzcyfQ.Z1eI-wcE5mZpRAwXxn7dPuV-AMxEtlwBe5NmtJezgQU
