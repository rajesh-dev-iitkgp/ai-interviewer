import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connectDB.js"
import userRouter from "./routes/userRoute.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// connection 

connectDB()

// routes

app.use("api/user", userRouter)


app.get("/", (req, res) => {
    console.log("API is working")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})