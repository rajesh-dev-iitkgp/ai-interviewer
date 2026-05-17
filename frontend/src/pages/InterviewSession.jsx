import { useParams } from "react-router-dom"
import { getInterviewById } from "../services/interviewService";
import { useEffect, useState } from "react";


const InterviewSession = () => {

    const {id}=useParams();
    const [interview, setInterview] = useState(null);

    useEffect(()=>{
        const fetchInterview = async()=>{
            try {
                const response = await getInterviewById(id);
                setInterview(response.data.interview);
            } catch (error) {
                console.log(error)
            }
        }
        fetchInterview();
    },[id])


  return (
    <div>
      {interview?.questions.map((question,index) =>{
        return (<div key={index}>
            <p>{question.question}</p>
        </div>
        )
      })
    }
    </div>
  )
}

export default InterviewSession
