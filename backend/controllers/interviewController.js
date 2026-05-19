import interviewModel from "../models/interviewModel.js"
import generateQuestions from "../services/AiService.js"

const testAI = async(req,res)=>{

    try{

        const questions = await generateQuestions({
            role:"Frontend Developer",
            experienceLevel:"Fresher",
            techStack:["JavaScript","CSS"]
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

export { generateInterview, getInterviewById, testAI };