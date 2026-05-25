import express from "express";
import { getInterviewHistory, getOverview , getScoreProgress, getRolePerformance} from "../controllers/analyticsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const analyticsRouter = express.Router()

analyticsRouter.get("/history",authMiddleware,getInterviewHistory)
analyticsRouter.get("/overview",authMiddleware,getOverview)
analyticsRouter.get("/score-progress",authMiddleware,getScoreProgress)
analyticsRouter.get("/role-performance",authMiddleware,getRolePerformance)

export default analyticsRouter