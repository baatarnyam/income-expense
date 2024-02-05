import fs from "fs";

// const userDb =
// "C:/Users/Dell/OneDrive/Desktop/income-expense/backend-income-expense/models/users.json";
const userDb =
  "/Users/23LP2888/income-expense/backend-income-expense/models/users.json";

export const getUserByDelete = async (request, response) => {
  try {
    const { email: paramEmail } = request.params;

    const allUsersJson = await fs.readFileSync(userDb);
    const allUsers = JSON.parse(allUsersJson);

    const oderUser = allUsers.filter(({ email }) => email !== paramEmail);
    await fs.writeFileSync(
      "/Users/23LP2888/income-expense/backend-income-expense/models/users.json",
      // "C:/Users/Dell/OneDrive/Desktop/income-expense/backend-income-expense/models/users.json",
      JSON.stringify(oderUser)
    );

    return "Deleted successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
