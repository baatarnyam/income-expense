import exp from "constants";
import fs, { writeFileSync } from "fs";

const readFile = async () => {
  try {
    const oldUsers = await fs.readFileSync(
      // "C:/Users/Dell/OneDrive/Desktop/router/models/users.json",
      "/Users/23LP2888/income-expense/backend-income-expense/models/users.json",
      "utf8"
    );
    return oldUsers;
  } catch (err) {
    return null;
  }
};

export const updateByUser = async (request, result) => {
  const userEmail = request.params.email;

  const {
    username: updatedUsername,
    password: updatedPassword,
    followers: updatedFollowers,
    following: updatedFollowing,
    img: updatedImg,
  } = request.body;

  const allUsersJson = await readFile();
  const users = JSON.parse(allUsersJson);

  const updateUser = users.find(({ email }) => email === userEmail);
  updateUser.username = updatedUsername;
  updateUser.password = updatedPassword;
  updateUser.followers = updatedFollowers;
  updateUser.following = updatedFollowing;
  updateUser.img = updatedImg;

  await fs.writeFileSync(
    // "C:/Users/Dell/OneDrive/Desktop/router/models/users.json",
    "/Users/23LP2888/income-expense/backend-income-expense/models/users.json",
    JSON.stringify(users)
  );
  return "Updated successfully";
};
