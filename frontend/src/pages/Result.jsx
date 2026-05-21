import Header from "../components/Result/Header"
import ScoreCard from "../components/Result/ScoreCard"
import FeedbackSection from "../components/Result/FeedbackSection"
import Button from "../components/Common/Button"
import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { getInterviewById } from "../services/interviewService"

const Result = () => {

    const {id}=useParams();
    const [interview,setInterview] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchInterview = async()=>{
            try {
                const response = await getInterviewById(id);
                setInterview(response.data.interview)
            } catch (error) {
                console.log(error)
            }
        } 
        fetchInterview()
    },[id])

    const onClickHandler = ()=>{
        navigate(`/feedback/${id}`);
    }

    const totalScore = interview?.totalScore;
    const totalMarks = interview?.questions?.length*10;
    const overallFeedback = interview?.overallFeedback;

    return (
    <div className="min-h-screen bg-[#f5f7fb] p-6">
      <div className="w-5xl mx-auto flex flex-col gap-6">
        <Header />
        <ScoreCard 
         totalScore={totalScore}
         totalMarks={totalMarks} />

        {overallFeedback && (
            <FeedbackSection overallFeedback={overallFeedback}/>
        )}
          <Button text="View Question-wise Feedback" onClick={onClickHandler} />
      </div>
    </div>
  )
}

export default Result
