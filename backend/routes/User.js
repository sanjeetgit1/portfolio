import express from "express";
import { getUser, login, logout } from "../controller/User.js";






export const userRouter = express.Router();


userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);



