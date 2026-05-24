import OverviewCard from "../components/Dashboard/OverviewCard"
import { Search,ChevronRight,ChevronLeft} from "lucide-react"
import { getInterviewHistory,getOverview } from "../services/analyticsService";
import { useEffect, useState } from "react";
import Loader from "../components/Common/Loader";
import { iconMap } from "../utils/constants";
import { getStatus } from "../utils/getStatus";
import { getScoreColor } from "../utils/getScoreColor";
import { useNavigate } from "react-router-dom";

const MyInterviews = () => {

  const [interviews, setInterviews] = useState([]);
  const [overview, setOverview] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        setLoading(true);
        const response = await getOverview();
        setOverview(response.data.overview);
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchOverview();
  }, []);

  const filteredInterviews = interviews.filter((interview) => interview.role.toLowerCase().includes(role.toLowerCase()));
  const totalPages = Math.ceil(filteredInterviews.length / itemsPerPage);
  const currentInterviews = filteredInterviews.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

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
                  className="outline-none" 
                  value = {role}
                  onChange={(e) => setRole(e.target.value)}/>
            </div>
          </div>
          <div>
            <OverviewCard overview={overview} />
          </div>
      </div>
      {/* BOTTOM PART */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 w-full">
        <div className="flex flex-col gap-4">
          {filteredInterviews.length === 0 ? <div className="flex items-center justify-center h-20">No Interviews Found</div>:
          
          currentInterviews.map((interview) => {
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
                    {interview.totalScore? interview.totalScore : 0}
                    <span className="text-base">/{interview.questions.length*10}</span>
                  </p>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all cursor-pointer"
                    onClick = {()=> navigate(`/result/${interview._id}`)}>
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
        <button 
          className={`flex items-center gap-2 px-5 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-all ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
          onClick={handlePrevious}>
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        <div className="flex items-center gap-3">
          {
            Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 cursor-pointer rounded-xl ${
                  currentPage === index + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-white"
                }`}
              >
                {index + 1}
              </button>
            ))
          }

        </div>
        <button 
          className={`flex items-center gap-2 px-5 bg-white py-2 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-all ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
          onClick={handleNext}>
          Next
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  )
}

export default MyInterviews
