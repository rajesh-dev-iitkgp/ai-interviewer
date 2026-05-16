import { BellIcon,MoveRightIcon } from "lucide-react"
import profile from "../assets/profile.png"
import banner from "../assets/banner.png"

const Home = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
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
      <div style={{ backgroundImage: `url(${banner})`,backgroundSize: "100% 100%",backgroundPosition: "center" }} className="h-72 bg-center rounded-lg text-white w-full overflow-hidden px-8 py-4 flex flex-col items-start justify-evenly">
        <h2 className="text-4xl ">Start a new Mock Interview</h2>
        <p className="max-w-80 text-lg text-white/80">Get AI-generated questions and personalised feedback</p>
        <div className="bg-white/90 text-blue-600 px-4 py-2 rounded-md text-xl w-fit flex items-center font-semibold justify-center gap-2 cursor-pointer hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200" >
          <p>Start now</p> 
          <MoveRightIcon />
        </div>
      </div>
      <div>
        overview
      </div>
      <div>recent interviews</div>
    </div>
  )
}

export default Home
