import interviewModel from "../models/interviewModel.js"
import { generateOverview } from "../services/AiService.js"

const getInterviewHistory = async (req,res)=>{
    try {
        const interviews= await interviewModel.find({userId: req.userId}).sort({createdAt:-1})
        res.status(200).json({success:true,interviews})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,error:error.message})
    }
}

const getOverview = async (req,res)=>{
    try {
        const interviews = await interviewModel.find({userId: req.userId}).sort({createdAt:-1})
        const result = await generateOverview(interviews)
        res.status(200).json({success:true,result})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,error:error.message})
    }
    
}

export {getInterviewHistory,getOverview}