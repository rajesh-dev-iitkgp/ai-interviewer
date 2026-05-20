import interviewModel from "../models/interviewModel.js"
import {generateQuestions,generateResult} from "../services/AiService.js"

const testAI = async(req,res)=>{
  const questions = [{question:"Are HTML tags case sensitive",userAnswer:"No , HTML is case insentitive"},
    {question:"Is JavaScript case sensitive",userAnswer:"Yes"},
  ]

  const result = await generateResult(questions)
  res.status(200).json({success:true,result})
}

const generateInterview = async (req, res) => {

  const {
    role,
    experienceLevel,
    techStack,
    interviewType,
    noOfQuestions
  } = req.body;

  const questions = await generateQuestions({role,experienceLevel,techStack,interviewType,noOfQuestions});

  const interview = await interviewModel.create({
    userId: req.userId,

    role,
    experienceLevel,
    techStack,
    interviewType,

    questions: questions,
  });

  res.status(200).json({
    success: true,
    interview,
  });
};

const getInterviewById = async (req, res) => {
    const interview = await interviewModel.findById(req.params.id);

    res.status(200).json({
        success: true,
        interview,
    });
}

const getResult = async (req, res) => {
  try {
    const result = await generateResult(req.body)

    const interview = await interviewModel.findByIdAndUpdate(req.params.id,{
        totalScore: result.totalScore,
        overallFeedback: result.overallFeedback,
        questions: result.questions
    });

    res.status(200).json({
        success: true,
        interview,
    });

  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"Server error"})
  }
}

export { generateInterview, getInterviewById, testAI, getResult };