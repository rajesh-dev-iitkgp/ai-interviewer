import { BellIcon,MoveRightIcon,Brain,BarChart3,History,} from "lucide-react"
import profile from "../assets/profile.png"
import banner from "../assets/banner.png"
import OverviewCard from "../components/Dashboard/OverviewCard"

const Home = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col ">
          <h1 className="font-bold text-2xl">Hello, Arjun 👋</h1>
          <p className="text-gray-500">Ready to improve your interview skills today?</p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <BellIcon />
          <img src={profile} alt="" className="h-8" />
        </div>
      </div>
      <div className="flex gap-4">
        {/* left banner */}
        <div style={{ backgroundImage: `url(${banner})`,backgroundSize: "100% 100%",backgroundPosition: "center" }} className="h-72 bg-center rounded-lg text-white w-170 overflow-hidden px-8 py-4 flex flex-col items-start justify-evenly">
          <h2 className="text-2xl ">Start a new Mock Interview</h2>
          <p className="max-w-80 text-lg text-white/80">Get AI-generated questions and personalised feedback</p>
          <div className="bg-white/90 text-blue-600 px-4 py-2 rounded-md text-xl w-fit flex items-center font-semibold justify-center gap-2 cursor-pointer hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200" >
            <p>Start now</p> 
            <MoveRightIcon />
          </div>
        </div>

        {/* right banner */}
        <div className="flex flex-col gap-4 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] p-4 rounded-md text-white backdrop-blur-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-slate-300">
            AI Mock Interview Platform
          </h2>

          <p className="text-lime-50 leading-relaxed text-md">
            Practice real interview questions, get instant AI feedback,
            track your progress, and improve communication skills.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2">
              <Brain className="text-violet-500"/> <p className="text-lg">AI-generated questions</p>
            </div>

            <div className="flex items-center gap-2">
              <BarChart3 className="text-violet-500" /> <p className="text-lg">Performance analytics</p>
            </div>

            <div className="flex items-center gap-2">
              <History className="text-violet-500" /> <p className="text-lg">Interview history tracking</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <p className="text-2xl font-semibold mb-4">Overview</p>
        <OverviewCard />
      </div>
      <div>recent interviews</div>
    </div>
  )
}

export default Home
