import OverviewCard from "../components/Dashboard/OverviewCard"
import { Search } from "lucide-react"

const MyInterviews = () => {
  return (
    <div className="flex flex-col gap-4 px-8 py-4 bg-[#f5f7fb]">
      <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="font-bold text-4xl">Interview History</h1>
              <p className="font-semibold text-gray-500">View all your previous mock interviews</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-xl bg-white">
              <Search />
              <input type="text" placeholder="Search Interview by Role..."
                  className="outline-none" />
            </div>
          </div>
          <div>
            <OverviewCard />
          </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default MyInterviews
