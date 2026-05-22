import express from "express";
import { getInterviewHistory } from "../controllers/analyticsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const analyticsRouter = express.Router()

analyticsRouter.get("/history",authMiddleware,getInterviewHistory)

export default analyticsRouter