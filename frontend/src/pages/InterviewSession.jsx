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

    useEffect(()=>{
        const fetchInterview = async()=>{
            try {
                setLoading(true);
                const response = await getInterviewById(id);
                console.log(response)
                setInterview(response.data.interview);
                
            } catch (error) {
                console.log(error)
            }
            finally{
                setLoading(false);
            }
        }
        fetchInterview();
    },[id])

    const currentQuestion = interview?.questions[currentQuestionIndex];


  if(loading) return <Loader />
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6">
        <div className="max-w-7xl mx-auto">
            <InterviewHeader 
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={interview?.questions.length}
                role={interview?.role}/>
            <div className="grid grid-cols-12 gap-6 mt-6">
                <div className="col-span-9">
                    <QuestionCard 
                        question={currentQuestion}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={interview?.questions.length}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}/>
                </div>
                <div className="col-span-3">
                    <QuestionNavigator 
                        totalQuestions={interview?.questions.length}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterviewSession
