import express from "express"
import { generateInterview, getInterviewById, testAI, getResult } from "../controllers/interviewController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const interviewRouter = express.Router()

interviewRouter.post("/generate",authMiddleware,generateInterview)
interviewRouter.get("/test-ai",testAI)
interviewRouter.get("/:id",authMiddleware,getInterviewById)
interviewRouter.post("/result/:id",authMiddleware,getResult)


export default interviewRouter