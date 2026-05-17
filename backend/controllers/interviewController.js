import interviewModel from "../models/interviewModel.js"

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

}

export { generateInterview, getInterviewById }