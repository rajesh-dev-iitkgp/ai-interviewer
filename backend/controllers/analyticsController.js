import interviewModel from "../models/interviewModel.js"

const getInterviewHistory = async (req,res)=>{
    try {
        console.log(req.userId)
        const interviews= await interviewModel.find({userId: req.userId})
        res.status(200).json({success:true,interviews})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,error:error.message})
    }
}

export {getInterviewHistory}