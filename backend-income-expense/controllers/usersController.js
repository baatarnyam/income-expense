import { getUserByLogin } from "../queries/user/getUserByLogin.js";
import { getAllUsers } from "../queries/user/getUsers.js";
import { getUserByDelete } from "../queries/user/deleteUser.js";
import { createByNewUser } from "../queries/user/createUser.js";
import { updateByUser } from "../queries/user/updateUser.js";
import { client } from "../index.js";

export const getAllUsersService = async (req, res) => {
  try {
    const users = await getAllUsers(req);
    res.send(JSON.stringify(users));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUserByDeleteService = async (req, res) => {
  try {
    const deleteUser = await getUserByDelete(req);

    res.send(deleteUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createUserService = async (req, res) => {
  try {
    const createUser = await createByNewUser(req);
    res.send(createUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateByUserService = async (req, res) => {
  try {
    const updateUser = await updateByUser(req);
    res.send(updateUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postRequestService = async (req, res) => {
  try {
    const requestUser = await getUserByLogin(req, res);

    res.send({ ...requestUser });
  } catch (error) {
    res.status(501).send(error.message);
  }
};

export const userLoginCheck = async (req, res) => {
  try {
    const header = req.headers.authorization;
    console.log(header);

    if (!header) {
      res.status(400).send("Token not Provied");
    }

    const token = header.split(" ")[1];

    const { email } = jwt.decode(token);
    res.send(email);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
