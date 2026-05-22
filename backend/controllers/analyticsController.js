import interviewModel from "../models/interviewModel.js"

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
        const interviews= await interviewModel.find({userId: req.userId}).sort({createdAt:-1})
        const totalInterviews = interviews.length;
        const totalScore = interviews.reduce(
            (acc,curr)=> acc + curr.totalScore,
            0
        );
        const normalizedScores = interviews.map(interview => {
            return (interview.totalScore / interview.questions.length*10) * 100;
        });
        const averagePercentage =normalizedScores.reduce((acc,curr)=>acc+curr,0)/ normalizedScores.length;
        const averageScore = averagePercentage/100
        const firstScore = interviews[interviews.length-1]?.totalScore || 0;
        const latestScore = interviews[0]?.totalScore || 0;
        const improvement =firstScore === 0? 0: (((latestScore-firstScore)/firstScore)*100).toFixed(0);
        const bestStreak = interviews.filter(interview => interview.totalScore >= 35).length;

        const weakness = interviews.filter( interview => interview.totalScore < 25).length / totalInterviews * 100;

        return res.status(200).json({success:true,overview:{interviewsTaken:totalInterviews,averageScore,improvement,bestStreak,weakness}})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,error:error.message})
    }
    
}

export {getInterviewHistory,getOverview}