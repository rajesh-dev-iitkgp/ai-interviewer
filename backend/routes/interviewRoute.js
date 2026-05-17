import express from "express"
import { generateInterview, getInterviewById } from "../controllers/interviewController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const interviewRouter = express.Router()

interviewRouter.post("/generate",authMiddleware,generateInterview)
interviewRouter.get("/:id",authMiddleware,getInterviewById)

export default interviewRouter