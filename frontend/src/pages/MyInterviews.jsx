import OverviewCard from "../components/Dashboard/OverviewCard"
import { Search,ChevronRight,ChevronLeft} from "lucide-react"
import { getInterviewHistory } from "../services/analyticsService";
import { useEffect, useState } from "react";
import Loader from "../components/Common/Loader";
import { iconMap } from "../utils/constants";
import { getStatus } from "../utils/getStatus";
import { getScoreColor } from "../utils/getScoreColor";

const MyInterviews = () => {

  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviewHistory = async () => {
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
    fetchInterviewHistory();
  }, []);


  if(loading) return <Loader />;
  return (
    <div className="flex flex-col gap-4 px-8 py-4 bg-[#f5f7fb]">
      {/* TOP PART */}
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
      {/* BOTTOM PART */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 w-full">
        <div className="flex flex-col gap-4">

          {interviews.map((interview) => {
            const Icon = iconMap[interview.role];
            const status = getStatus(interview.totalScore);
            const color = getScoreColor(status);

            return (
              <div
                key={interview._id}
                className="flex items-center justify-between border border-gray-200 rounded-xl p-4 hover:border-indigo-500 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {interview.role}
                    </h2>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <span>{interview.experienceLevel}</span>
                      <span>•</span>
                      <span>{interview.createdAt.split("T")[0]}</span>
                      <span>•</span>
                      <span>{interview.questions.length} Questions</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <p className={`text-2xl font-bold ${color}`}>
                    {interview.totalScore}
                    <span className="text-base">/{interview.questions.length*10}</span>
                  </p>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      {/* PAGE NUMBERS */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button className="flex items-center gap-2 px-5 py-2 border bg-white border-gray-200 rounded-xl text-gray-400 font-medium hover:bg-gray-100 transition-all">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        <div className="flex items-center gap-3">

          <button className="w-10 h-10 rounded-xl bg-linear-to-b from-indigo-500 to-purple-600 text-white font-semibold shadow-md">
            1
          </button>

          <button className="w-10 h-10 rounded-xl text-gray-700 font-semibold hover:bg-gray-100 transition-all">
            2
          </button>

          <button className="w-10 h-10 rounded-xl text-gray-700 font-semibold hover:bg-gray-100 transition-all">
            3
          </button>
        </div>
        <button className="flex items-center gap-2 px-5 bg-white py-2 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-all">
          Next
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  )
}

export default MyInterviews
