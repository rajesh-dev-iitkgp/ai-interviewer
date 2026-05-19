import { useParams } from "react-router-dom"
import { getInterviewById } from "../services/interviewService";
import { useEffect, useState } from "react";
import InterviewHeader from "../components/Interview/InterviewHeader";
import QuestionCard from "../components/Interview/QuestionCard";
import QuestionNavigator from "../components/Interview/QuestionNavigator";
import Loader from "../components/Common/Loader";


const InterviewSession = () => {

    const {id}=useParams();
    const [loading, setLoading] = useState(true)
    const [interview, setInterview] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [answers, setAnswers] = useState([]);

    useEffect(()=>{
        const fetchInterview = async()=>{
            try {
                setLoading(true);
                const response = await getInterviewById(id);
                setInterview(response.data.interview)

                const questionsLength = response.data.interview.questions.length;
                setTimeLeft(questionsLength * 4 * 60);

                const initialAnswers = response.data.interview.questions.map((q)=>({
                    question:q.question,
                    answer:"",
                }))

                setAnswers(initialAnswers);
                
            } catch (error) {
                console.log(error)
            }
            finally{
                setLoading(false);
            }
        }
        fetchInterview();
    },[id])

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if(prev <= 1){
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const currentQuestion = interview?.questions[currentQuestionIndex];

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


  if(loading) return <Loader />
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6">
        <div className="max-w-7xl mx-auto">
            <InterviewHeader 
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={interview?.questions.length}
                role={interview?.role}
                formattedTime={formattedTime}/>
            <div className="grid grid-cols-12 gap-6 mt-6">
                <div className="col-span-9">
                    <QuestionCard 
                        question={currentQuestion}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={interview?.questions.length}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        answer={answers[currentQuestionIndex]?.answer}
                        setAnswers={setAnswers}/>
                </div>
                <div className="col-span-3">
                    <QuestionNavigator 
                        totalQuestions={interview?.questions.length}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        answers={answers}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterviewSession
