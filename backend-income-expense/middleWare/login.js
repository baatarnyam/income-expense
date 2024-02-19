import { all } from "axios";
import { constants } from "buffer";
import fs from "fs";
import { compareHash } from "../utils/passwordHash.js";
import jwt from "jsonwebtoken";

const userDb =
  "/Users/23LP2888/income-expense/backend-income-expense/models/users.json";
// const userDb =
// "C:/Users/Dell/income-expense/backend-income-expense/models/users.json";

export const postRequest = async (req, res, next) => {
  try {
    const { email: userEmail, password } = req.body;

    const allUsersJson = JSON.parse(fs.readFileSync(userDb, "utf-8"));

    const checkedUser = allUsersJson.find(({ email }) => email === userEmail);
    if (!checkedUser) {
      res.send("User not found");
      return;
    }

    const checkedHash = compareHash(password, checkedUser.password);

    // const accessToken = jwt.sign(
    //   { email: checkedUser.email },
    //   process.env.JWT_SECRET || "defaultSecret",
    //   { expiresIn: "1d" }
    // );

    if (checkedHash) {
      next();
      return;
    } else {
      res.send("Email or password is wrong");
    }
  } catch (error) {
    res.send(error.message);
  }
};
