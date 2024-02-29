import fs from "fs";
import jwt from "jsonwebtoken";

// const userDb =
// "/Users/23LP2888/income-expense/backend-income-expense/models/users.json";

export const getUserByEmail = async (req, res) => {
  const header = req.headers.authorization;

  if (!header) {
    res.status(400).send("Token no Provided");
  }

  const token = header.split(" ")[1];

  const { email } = jwt.decode(token);
  res.send(email);
};

// try {
//   const { email: paramEmail } = request.body;

//   const allUsersJson = await fs.readFileSync(userDb);
//   const allUsers = JSON.parse(allUsersJson);

//   const exactUser = allUsers.find(({ email }) => email === paramEmail);

//   return exactUser;
// } catch (error) {
//   throw new Error(error.message);
// }
