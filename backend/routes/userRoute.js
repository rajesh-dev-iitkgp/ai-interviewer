import express from "express";
import { loginUser, registerUser, logoutUser, getCurrentUser, updateUser } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router()

userRouter.post("/login", loginUser)
userRouter.post("/register", registerUser)
userRouter.post("/logout", logoutUser)
userRouter.get("/me",authMiddleware,getCurrentUser)
userRouter.put("/update",upload.single("image"),authMiddleware,updateUser)

export default userRouter