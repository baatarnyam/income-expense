import fs from "fs";
import { makeHash } from "../../utils/passwordHash.js";

const readFile = async () => {
  try {
    const oldUsers = await fs.readFileSync(
      "/Users/23LP2888/blog/router/models/users.json",
      // "C:/Users/Dell/OneDrive/Desktop/router/models/users.json",
      "utf8"
    );
    return oldUsers;
  } catch (err) {
    return null;
  }
};

export const createByNewUser = async (req, res) => {
  const { username, email, password, followers, following, img } = req.body;
  const hashedPassword = makeHash(password);
  // console.log(hashedPassword);

  if (!username || !email || !password) {
    throw new Error("Medeelel dutuu bn");
  }

  try {
    const oldUserFile = await readFile(
      "/Users/23LP2888/blog/router/models/users.json",
      // "C:/Users/Dell/OneDrive/Desktop/router/models/users.json",
      "utf-8"
    );
    const allUsers = JSON.parse(oldUserFile);
    const isUserExisted = allUsers.find((el) => el.email === email);

    if (isUserExisted) {
      throw new Error("user already existed");
    }

    allUsers.push({
      username,
      email,
      password: hashedPassword,
      // followers,
      // following,
      // img,
    });

    await fs.writeFileSync(
      "/Users/23LP2888/blog/router/models/users.json",
      // "C:/Users/Dell/OneDrive/Desktop/router/models/users.json",
      JSON.stringify(allUsers)
    );

    return "User created successfully";
  } catch (error) {
    throw new Error(error);
  }
};
