import { all } from "axios";
import { constants } from "buffer";
import fs from "fs";
import { compareHash } from "../utils/passwordHash.js";
// const userDb = "/Users/23LP2888/blog/router/models/users.json";
const userDb =
  "C:/Users/Dell/OneDrive/Desktop/income-expense/backend-income-expense/models/users.json";

export const postRequest = async (req, res, next) => {
  try {
    const { email: userEmail, password } = req.body;

    const allUsersJson = JSON.parse(fs.readFileSync(userDb, "utf-8"));

    const checkedUser = allUsersJson.find(({ email }) => email === userEmail);
    if (!checkedUser) {
      res.send("Email or Password is empty");
      return;
    }

    const checkedHash = compareHash(password, checkedUser.password);

    if (checkedHash) {
      next();
      return;
    } else {
      res.status(401).send(" Email or password is wrong");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
