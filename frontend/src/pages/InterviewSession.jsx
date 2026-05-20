import { useParams } from "react-router-dom"
import { getInterviewById, getResult } from "../services/interviewService";
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
    const [reviewQuestions, setReviewQuestions] = useState([]);

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
                    userAnswer:"",
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
    }, [timeLeft]);

    const currentQuestion = interview?.questions[currentQuestionIndex];

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const toggleReview = (index)=>{
        if(reviewQuestions.includes(index)){
            setReviewQuestions(prev => prev.filter(q => q !== index));
        }
        else{
            setReviewQuestions(prev => [...prev,index]);
        }
    }

    const handleSubmitInterview = async()=>{
        try {
            const response = await getResult(interview._id, answers);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


  if(loading) return <Loader />
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6">
        <div className="max-w-7xl mx-auto">
            <InterviewHeader 
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={interview?.questions.length}
                role={interview?.role}
                formattedTime={formattedTime}
                handleSubmitInterview={handleSubmitInterview}/>
            <div className="grid grid-cols-12 gap-6 mt-6">
                <div className="col-span-9">
                    <QuestionCard 
                        question={currentQuestion}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={interview?.questions.length}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        userAnswer={answers[currentQuestionIndex]?.userAnswer}
                        setAnswers={setAnswers}
                        toggleReview={toggleReview}
                        reviewQuestions={reviewQuestions}
                        handleSubmitInterview={handleSubmitInterview}/>
                </div>
                <div className="col-span-3">
                    <QuestionNavigator 
                        totalQuestions={interview?.questions.length}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        answers={answers}
                        reviewQuestions={reviewQuestions}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterviewSession
