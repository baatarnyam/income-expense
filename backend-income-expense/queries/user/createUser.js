import { client } from "../../index.js";

const createUser = async (email, password, age, username) => {
  const useCreateQuery = `
  INSERT INTO users( username, email, password, age ) VALUES ($1, $2, $3, $4) RETURNING id`;

  const userId = await client.query(useCreateQuery, [
    username,
    email,
    password,
    age,
  ]);
  return userId;
};

export const createByNewUser = async (req, res) => {
  const { email, password, age, username } = req.body;

  try {
    const userId = await createUser(email, password, age, username);
    console.log(userId);
    res.send(userId);

    // return "User created successfully";
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};

// import fs from "fs";
// import { makeHash } from "../../utils/passwordHash.js";
// import { error } from "console";

// // const userDb =
// // "C:/Users/Dell/income-expense/backend-income-expense/models/users.json";
// const userDb =
//   "/Users/23LP2888/income-expense/backend-income-expense/models/users.json";

// export const createByNewUser = async (req, res) => {
//   const { username, email, password } = req.body;
//   const hashedPassword = makeHash(password);
//   // console.log(hashedPassword);

//   if (!username || !email || !password) {
//     throw new Error("Medeelel dutuu bn");
//   }

//   try {
//     const allUsersJson = await fs.readFileSync(userDb, "utf8");
//     const allUsers = JSON.parse(allUsersJson);

//     const isUserExisted = allUsers.find((el) => el.email === email);
//     if (isUserExisted) {
//       throw new Error("User already existed");
//     }

//     allUsers.push({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await fs.writeFileSync(
//       "/Users/23LP2888/income-expense/backend-income-expense/models/users.json",
//       // "C:/Users/Dell/income-expense/backend-income-expense/models/users.json",
//       JSON.stringify(allUsers)
//     );

//     return "User created successfully";
//   } catch (error) {
//     throw new Error(error);
//   }
// };
