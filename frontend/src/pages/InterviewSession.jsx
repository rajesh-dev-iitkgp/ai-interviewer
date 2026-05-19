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


  if(loading) return <Loader />
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6">
        <div className="max-w-7xl mx-auto">
            <InterviewHeader />
            <div className="grid grid-cols-12 gap-6 mt-6">
                <div className="col-span-9">
                    <QuestionCard />
                </div>
                <div className="col-span-3">
                    <QuestionNavigator />
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterviewSession
