import fs from "fs";

// const userDb = "/Users/23LP2888/blog/router/models/users.json";
const userDb =
  "C:/Users/Dell/OneDrive/Desktop/income-expense/backend-income-expense/models/users.json";

export const getUserByEmail = async (request, response) => {
  try {
    const { email: paramEmail } = request.body;

    const allUsersJson = await fs.readFileSync(userDb);
    const allUsers = JSON.parse(allUsersJson);

    const exactUser = allUsers.find(({ email }) => email === paramEmail);

    return exactUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
