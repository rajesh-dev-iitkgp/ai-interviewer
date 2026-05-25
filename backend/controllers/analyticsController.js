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

        if(interviews.length === 0){
            return res.status(200).json({success:true,overview:null})
        }

        const normalizedScores = interviews.map(interview => {
            return (interview.totalScore / (interview.questions.length*10)) * 100;
        });
        const averagePercentage =normalizedScores.reduce((acc,curr)=>acc+curr,0)/ normalizedScores.length;
        const averageScore = averagePercentage.toFixed(0);
        const firstPercentage = interviews[interviews.length-1]?.totalScore / (interviews[interviews.length-1]?.questions.length*10)*100 || 0;
        const latestPercentage = interviews[0]?.totalScore / (interviews[0]?.questions.length*10)*100 || 0;
        const improvement =firstPercentage === 0? 0: (((latestPercentage-firstPercentage)/firstPercentage)*100).toFixed(0);
        const bestStreak = interviews.filter(interview => (interview.totalScore/(interview.questions.length*10)*100) >= 50).length / totalInterviews * 100;
        const weakness = interviews.filter( interview => (interview.totalScore/(interview.questions.length*10)*100) < 35).length / totalInterviews * 100;

        return res.status(200).json({success:true,overview:{interviewsTaken:totalInterviews,averageScore,improvement,bestStreak,weakness}})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,error:error.message})
    } 
}

const getScoreProgress = async(req,res)=>{
    try {
    const interviews = await interviewModel.find({userId: req.userId}).select("totalScore createdAt").sort({createdAt:1});

    const progress = interviews.map(interview => ({
        date: new Date(interview.createdAt).toLocaleDateString("en-US",{
            month:"short",
            day:"numeric",
        }),
        score: interview.totalScore
    }))

    return res.status(200).json({success:true,progress})
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({success:false,error:error.message})
    }
}

const getRolePerformance = async (req,res)=>{
    try{
        const interviews = await interviewModel.find({userId: req.userId}).select("totalScore role questions");
        const roleMap ={}

        interviews.forEach(interview =>{
            const {role,totalScore} = interview;
            const percentage=(totalScore/(interview.questions.length*10))*100;
            
            if(!roleMap[role]){
                roleMap[role]={
                    totalInterviews:0,
                    totalPercentage:0,
                }
            }

            roleMap[role].totalInterviews += 1;
            roleMap[role].totalPercentage += percentage;
        })

        const performance = Object.entries(roleMap).map(([role,value])=>({
            role,
            score:Math.round(value.totalPercentage/value.totalInterviews),
        }))

        return res.status(200).json({success:true,performance})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({success:false,error:error.message})
    }
}

const getFeedback = async (req,res)=>{
    try{
        const interviews = await interviewModel.find({userId: req.userId}).select("totalScore overallFeedback");
        interviews.sort((a,b)=> b.totalScore - a.totalScore);
        const topInterviews = interviews.slice(0,5)
        const strengths =[]
        const weaknesses =[]
        topInterviews.forEach(interview => {
            strengths.push(interview.overallFeedback.strengths[0])
            weaknesses.push(interview.overallFeedback.weaknesses[0])
        })

        const uniqueStrengths = [...new Set(strengths)].slice(0,3);
        const uniqueWeaknesses = [...new Set(weaknesses)].slice(0,3);

        return res.status(200).json({success:true,feedback:{strengths:uniqueStrengths,weaknesses:uniqueWeaknesses}})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({success:false,error:error.message})
    }
}

export {getInterviewHistory,getOverview,getScoreProgress,getRolePerformance,getFeedback}