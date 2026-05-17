import express from "express"
import { generateInterview, getInterviewById } from "../controllers/interviewController"

const interviewRouter = express.Router()

interviewRouter.post("/generate",generateInterview)
interviewRouter.get("/:id",getInterviewById)

export default interviewRouter