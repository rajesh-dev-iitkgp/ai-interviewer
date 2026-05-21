import FeedbackHeader from "../components/Feedback/FeedbackHeader"
import QuestionFeedback from "../components/Feedback/QuestionFeedback"
import Questions from "../components/Feedback/Questions"
import { getInterviewById } from "../services/interviewService"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

const Feedback = () => {

    const {id}= useParams()
    const [interview,setInterview]= useState(null)
    const [questions,setQuestions]=useState([])
    const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0)

    useEffect(()=>{
        const fetchInterview = async ()=>{
            const response = await getInterviewById(id)
            setInterview(response.data.interview)
            setQuestions(response.data.interview.questions)
        }
        fetchInterview()
    },[id])

  return (
    <div className="bg-[#f5f7fb] flex flex-col gap-4 px-8 py-4">
        <FeedbackHeader 
            totalScore={interview?.totalScore}
            totalMarks={interview?.questions.length*10}
            questions={questions} />
        <div className="grid grid-cols-7 gap-2">
            <Questions
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex} />
            {
            questions.length > 0 && (
                <QuestionFeedback
                currentQuestion={questions[currentQuestionIndex]}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                totalQuestions={questions.length}
                />
            )
            }
        </div>
    </div>
  )
}

export default Feedback
