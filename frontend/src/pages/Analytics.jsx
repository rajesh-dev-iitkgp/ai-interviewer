import OverviewCard from "../components/Dashboard/OverviewCard"
import { useEffect,useState,useContext } from "react"
import { getOverview, getProgress, getRolePerformance, getFeedback } from "../services/analyticsService"
import Progress from "../components/Analytics/Progress"
import Performance from "../components/Analytics/Performance"
import StrengthCard from "../components/Result/StrengthCard"
import WeaknessCard from "../components/Result/WeaknessCard"
import { UserContext } from "../context/userContext"

const Analytics = () => {
  const [overview,setOverview] = useState({})
  const [progress,setProgress] = useState([])
  const [performance,setPerformance] = useState([])
  const [feedback,setFeedback] = useState({})
  const {user} = useContext(UserContext)

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

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await getProgress();
        setProgress(response.data.progress);
      } catch (error) {
        console.log(error)
      }
    }
    fetchProgress()
  },[])

  useEffect(() => {
    const fetchRolePerformance = async () => {
      try {
        const response = await getRolePerformance();
        setPerformance(response.data.performance);
      } catch (error) {
        console.log(error)
      }
    }
    fetchRolePerformance()
  },[])

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await getFeedback();
        setFeedback(response.data.feedback);
      } catch (error) {
        console.log(error)
      }
    }
    fetchFeedback()
  },[])

  return (
    <div className="flex flex-col gap-8 p-4 bg-[#f5f7fb]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 justify-between">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="font-bold text-4xl">Analytics</h1>
          <p className="font-semibold text-gray-500">Track your progress and improve your skills</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white">
          <h1 className="font-semibold text-[#0f172a] text-xl">Analytics of <span className="font-bold text-violet-500 font-2xl">{user.name}</span></h1>
        </div>
      </div>
      {/* Overview */}
      <div>
        <OverviewCard overview={overview || {}} />
      </div>
      {/* Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Progress progress={progress} />
        <Performance performance={performance} />
      </div>
      {/* Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StrengthCard strengths={feedback.strengths || []} />
        <WeaknessCard weaknesses={feedback.weaknesses || []} />
      </div>
    </div>
  )
}

export default Analytics
