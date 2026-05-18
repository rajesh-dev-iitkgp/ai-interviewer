import interviewModel from "../models/interviewModel.js"
import { generateQuestions } from "../services/aiService.js"

const testAI = async(req,res)=>{

    try{

        const questions = await generateQuestions({
            role:"Frontend Developer",
            experienceLevel:"Fresher",
            techStack:["React","JavaScript","CSS"]
        })

        res.json({
            success:true,
            questions
        })

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const generateInterview = async (req, res) => {

  const {
    role,
    experienceLevel,
    techStack,
    interviewType
  } = req.body;

  const dummyQuestions = [
    {
      question: "Explain useEffect.",
      userAnswer: "",
      score: 0,
      feedback: {},
    },
  ];

  const interview = await interviewModel.create({
    userId: req.userId,

    role,
    experienceLevel,
    techStack,
    interviewType,

    questions: dummyQuestions,
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

export { generateInterview, getInterviewById, testAI };