// create user
// update user
// get users
// get user
// delete user

import { getUserByEmail } from "../queries/user/getUser.js";
import { getAllUsers } from "../queries/user/getUsers.js";
import { getUserByDelete } from "../queries/user/deleteUser.js";
import { createByNewUser } from "../queries/user/createUser.js";
import { updateByUser } from "../queries/user/updateUser.js";
import { postRequest } from "../middleWare/login.js";

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(JSON.stringify(user));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

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
    const requestUser = await getUserByEmail(req);
    res.send(requestUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};