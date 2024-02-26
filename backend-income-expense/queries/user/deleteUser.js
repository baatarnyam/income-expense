import fs from "fs";
// import { client } from "../index.js";

// const userDb =
// "C:/Users/Dell/income-expense/backend-income-expense/models/users.json";
// const userDb =
// "/Users/23LP2888/income-expense/backend-income-expense/models/users.json";

// const getUserQuery = async (email) => {
//   const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
//   const user = await client.query(loginUserQuery, [email]);

//   console.log(user.rows);

//   return user.rows;
// };

export const getUserByDelete = async (request, response) => {
  const { email: paramEmail } = request.params;

  // const users = getUserQuery(email);
  // const user = users.filter(({ email }) => email !== paramEmail);

  try {
    const { email: paramEmail } = request.params;

    const allUsersJson = await fs.readFileSync(userDb);
    const allUsers = JSON.parse(allUsersJson);

    const oderUser = allUsers.filter(({ email }) => email !== paramEmail);
    await fs.writeFileSync(
      "/Users/23LP2888/income-expense/backend-income-expense/models/users.json",
      // "C:/Users/Dell/income-expense/backend-income-expense/models/users.json",
      JSON.stringify(oderUser)
    );

    return "Deleted successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
