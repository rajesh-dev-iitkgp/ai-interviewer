import { useNavigate } from "react-router-dom"
import { getInterviewHistory } from "../../services/analyticsService"
import { useEffect, useState } from "react"
import Loader from "../Common/Loader"
import { iconMap } from "../../utils/constants"

const RecentInterviewCard = () => {

    const navigate=useNavigate()
    const [interviews,setInterviews]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
      const fetchInterview = async()=>{
        try {
          setLoading(true);
          const response = await getInterviewHistory();
          setInterviews(response.data.interviews);
        } catch (error) {
          console.log(error);
        }
        finally{
          setLoading(false);
        }
      }
      fetchInterview()
    },[])

    if (!interviews.length) {
      return (
        <div className="bg-white flex flex-col gap-4 rounded-2xl p-4 shadow">
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl">Recent Interviews</p>
            <p 
                className="text-blue-400 border border-black/30 p-1 rounded-md cursor-pointer hover:bg-indigo-100 transition-all duration-200"
                onClick={()=>{navigate("/my-interviews")}}>View All</p>
          </div>
          <div className="flex items-center justify-between p-2 border border-gray-300 rounded-md">
            No interviews taken to display
          </div>
        </div>
      )
    }

    const interview=interviews[0] || {}
    const Icon=iconMap[interview.role]

  if(loading) return <Loader />

  return (
    <div className="bg-white flex flex-col gap-4 rounded-2xl p-4 shadow">
      <div className="flex items-center justify-between">
        <p className="font-bold text-2xl">Recent Interviews</p>
        <p 
            className="text-blue-400 border border-black/30 p-1 rounded-md cursor-pointer hover:bg-indigo-100 transition-all duration-200"
            onClick={()=>{navigate("/my-interviews")}}>View All</p>
      </div>
      <div className="flex items-center justify-between p-2 border border-gray-300 rounded-md">
        <div className="bg-indigo-100 p-2 rounded-xl">
          <Icon className="w-7 h-7  text-indigo-600" />
        </div>
        <p className="font-semibold">{interview.role || "Software Engineer"}</p>
        <p className="hidden md:block font-semibold bg-indigo-100 rounded-md p-1">{interview.experienceLevel}</p>
        <p className="hidden md:block font-semibold text-gray-500">{interview.createdAt.split("T")[0]}</p>
        <p className="text-green-600 font-bold text-xl">{interview.totalScore || 0}/{interview.questions.length*10}</p>
      </div>
    </div>
  )
}

export default RecentInterviewCard
