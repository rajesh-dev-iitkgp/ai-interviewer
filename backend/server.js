import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/connectDB.js"
import userRouter from "./routes/userRoute.js"
import interviewRouter from "./routes/interviewRoute.js"
import analyticsRouter from "./routes/analyticsRoute.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())

// connection 

connectDB()

// routes

app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/analytics", analyticsRouter)


app.get("/", (req, res) => {
    console.log("API is working")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})