import { all } from "axios";
import fs from "fs";

// const userDb = "/Users/23LP2888/blog/router/models/users.json";
const userDb = "C:/Users/Dell/OneDrive/Desktop/router/models/users.json";

export const getAllUsers = async (request, response) => {
  try {
    const allUsersJson = await fs.readFileSync(userDb);
    const allUsers = JSON.parse(allUsersJson);
    return allUsers;
  } catch (error) {
    throw new Error(error.message);
  }
};
