import mongoose from "mongoose"

const interviewSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
    role:String,
    experienceLevel:String,
    techStack:[String],
    interviewType:String,
    totalScore:Number,
    overallFeedback:{
        strengths:[String],
        weaknesses:[String],
        idealApproach:[String]
    },
    questions:[
        {
            question:String,
            userAnswer:String,
            score:Number,
            feedback: {
                strengths: [String],
                weaknesses: [String],
                idealApproach: [String],
            },
        }
    ],
},{timestamps:true})

const InterviewModel = mongoose.models.Interview || new mongoose.model("Interviews",interviewSchema)

export default InterviewModel