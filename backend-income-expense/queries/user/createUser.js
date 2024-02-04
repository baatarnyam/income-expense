import fs from "fs";
import { makeHash } from "../../utils/passwordHash.js";

// const readFile = async () => {
//   try {
//     const oldUsers = await fs.readFileSync(
//       // "/Users/23LP2888/blog/router/models/users.json",

//       "C:/Users/Dell/OneDrive/Desktop/income-expense/backend-income-expense/models/users.json",
//       "utf8"
//     );
//     return oldUsers;
//   } catch (err) {
//     return null;
//   }
// };
const userDb =
  "C:/Users/Dell/OneDrive/Desktop/income-expense/backend-income-expense/models/users.json";
// const userDb = "/Users/23LP2888/blog/router/models/users.json",

export const createByNewUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = makeHash(password);
  // console.log(hashedPassword);

  if (!username || !email || !password) {
    throw new Error("Medeelel dutuu bn");
  }

  try {
    const allUsersJson = await fs.readFileSync(userDb, "utf8");
    const allUsers = JSON.parse(allUsersJson);

    const isUserExisted = allUsers.find((el) => el.email === email);

    if (isUserExisted) {
      throw new Error("user already existed");
    }

    allUsers.push({
      username,
      email,
      password: hashedPassword,
    });

    await fs.writeFileSync(
      // "/Users/23LP2888/blog/router/models/users.json",
      "C:/Users/Dell/OneDrive/Desktop/income-expense/backend-income-expense/models/users.json",
      JSON.stringify(allUsers)
    );

    return "User created successfully";
  } catch (error) {
    throw new Error(error);
  }
};
