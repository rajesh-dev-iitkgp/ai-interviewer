import express from "express";
import { getInterviewHistory, getOverview } from "../controllers/analyticsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const analyticsRouter = express.Router()

analyticsRouter.get("/history",authMiddleware,getInterviewHistory)
analyticsRouter.get("/overview",authMiddleware,getOverview)

export default analyticsRouter