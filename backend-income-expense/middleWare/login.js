import { all } from "axios";
import { constants } from "buffer";
import fs from "fs";
import { compareHash } from "../utils/passwordHash.js";
import { client } from "../index.js";

const getUserQuery = async (email) => {
  // await client.connect();
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);
  // console.log(user);

  return user.rows;
};

export const postRequest = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await getUserQuery(email);

    if (!user.length) {
      res.send("User not found");
      return;
    }

    const checkedHash = compareHash(password, user[0].password);

    if (checkedHash) {
      next();
      return;
    } else {
      res.status(401).send("Email or password is wrong");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// try {
//   const { email: userEmail, password } = req.body;
//   const allUsersJson = JSON.parse(fs.readFileSync(userDb, "utf-8"));
//   const checkedUser = allUsersJson.find(({ email }) => email === userEmail);
//   if (!checkedUser) {
//     res.send("User not found");
//     return;
//   }
//   const checkedHash = compareHash(password, checkedUser.password);

//   // const accessToken = jwt.sign(
//   //   { email: checkedUser.email },
//   //   process.env.JWT_SECRET || "defaultSecret",
//   //   { expiresIn: "1d" }
//   // );

//   if (checkedHash) {
//     next();
//     return;
//   } else {
//     res.send("Email or password is wrong");
//   }
// } catch (error) {
//   res.send(error.message);
// }
