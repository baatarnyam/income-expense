import express from "express";

import { getUserByEmailService } from "../controllers/usersController.js";
import { getAllUsersService } from "../controllers/usersController.js";
import { getUserByDeleteService } from "../controllers/usersController.js";
import { createUserService } from "../controllers/usersController.js";
import { updateByUserService } from "../controllers/usersController.js";
import { postRequestService } from "../controllers/usersController.js";
import { postRequest } from "../middleWare/login.js";
import { tokenCheck } from "../middleWare/tokenCkeck.js";

const userRouter = express.Router();

//get
userRouter.get("/users/:email", getUserByEmailService);
//
//getAll
userRouter.get("/users", getAllUsersService);

//postRequest
userRouter.post("/login", postRequest, postRequestService);

//post
userRouter.post("/users", createUserService);

//put
userRouter.put("/users/:email", updateByUserService);

//delete
userRouter.delete("/users/:email", getUserByDeleteService);

//token check
userRouter.post("/token", tokenCheck);

userRouter.post("/verify", postRequest, postRequestService);

export default userRouter;
