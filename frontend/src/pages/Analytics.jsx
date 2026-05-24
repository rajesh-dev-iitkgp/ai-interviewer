import OverviewCard from "../components/Dashboard/OverviewCard"
import { useEffect,useState } from "react"
import { getOverview } from "../services/analyticsService"
import Progress from "../components/Analytics/Progress"
import Performance from "../components/Analytics/Performance"

const Analytics = () => {
  const [overview,setOverview] = useState({})

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const response = await getOverview();
        setOverview(response.data.overview);
      } catch (error) {
        console.log(error)
      }
    }
    fetchOverview()
  },[])

  return (
    <div className="flex flex-col gap-4 p-4 bg-[#f5f7fb]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="font-bold text-4xl">Analytics</h1>
          <p className="font-semibold text-gray-500">Track your progress and improve your skills</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-xl bg-white">
          <input type="date" className="outline-none w-full" />
        </div>
      </div>
      {/* Overview */}
      <div>
        <OverviewCard overview={overview} />
      </div>
      {/* Graphs */}
      <div>
        <Progress />
        <Performance />
      </div>
      {/* Feedback */}
      <div></div>
    </div>
  )
}

export default Analytics
