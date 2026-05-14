import express from "express";
import { loginUser, registerUser, logoutUser, getCurrentUser } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.post("/login", loginUser)
userRouter.post("/register", registerUser)
userRouter.post("/logout", logoutUser)
userRouter.get("/me",getCurrentUser)

export default userRouter