import fs from "fs";
import jwt from "jsonwebtoken";

export const getUserByLogin = async (req, res) => {
  const accessToken = jwt.sign(
    { email: req.body.email },
    process.env.JWT_SECRET || "defaultSecret",
    { expiresIn: "1h" }
  );

  return { accessToken: accessToken };
};
