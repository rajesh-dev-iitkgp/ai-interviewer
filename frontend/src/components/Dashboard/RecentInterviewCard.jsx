import { FileCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"

const RecentInterviewCard = () => {

    const navigate=useNavigate()

  return (
    <div className="bg-white flex flex-col gap-4 rounded-2xl p-4 shadow">
      <div className="flex items-center justify-between">
        <p className="font-bold text-2xl">Recent Interviews</p>
        <p 
            className="text-blue-400 border border-black/30 p-1 rounded-md cursor-pointer hover:bg-indigo-100 transition-all duration-200"
            onClick={()=>{navigate("/my-interviews")}}>View All</p>
      </div>
      <div className="flex items-center justify-between p-2 rounded-md">
        <FileCheck className="text-indigo-400"/>
        <p className="font-semibold">Full Stack Developer</p>
        <p className="font-semibold bg-indigo-100 rounded-md p-1">Intermediate</p>
        <p className="text-gray-500">May 16, 2026</p>
        <p className="text-green-600 font-bold text-xl">8.5/10</p>
      </div>
    </div>
  )
}

export default RecentInterviewCard
