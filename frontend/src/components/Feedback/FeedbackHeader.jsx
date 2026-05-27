import { MoveLeft,Download,ClipboardList,CircleCheckBig,CircleMinus,CircleX,Trophy, } from "lucide-react"
import { getStatus } from "../../utils/getStatus"
import { useNavigate, useParams } from "react-router-dom";

const FeedbackHeader = ({totalScore,totalMarks,questions,handleDownloadReport}) => {

    const navigate = useNavigate();
    const {id} = useParams();

    const totalQuestions = questions?.length || 0;

    const goodAnswers = questions?.filter(
    (q) => getStatus(q.score) === "good"
    ).length || 0;

    const averageAnswers = questions?.filter(
    (q) => getStatus(q.score) === "average"
    ).length || 0;

    const badAnswers = questions?.filter(
    (q) => getStatus(q.score) === "bad"
    ).length || 0;

    const stats = [
    {
        title: "Total Questions",
        value: totalQuestions,
        percentage: "",
        icon: ClipboardList,
        iconBg: "bg-violet-100",
        iconColor: "text-violet-500",
    },
    {
        title: "Good Answers",
        value: goodAnswers,
        percentage: `${(goodAnswers/totalQuestions)*100}%`,
        icon: CircleCheckBig,
        iconBg: "bg-green-100",
        iconColor: "text-green-500",
        percentColor: "text-green-500",
    },
    {
        title: "Average Answers",
        value: averageAnswers,
        percentage: `${(averageAnswers/totalQuestions)*100}%`,
        icon: CircleMinus,
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-500",
        percentColor: "text-yellow-500",
    },
    {
        title: "Improve",
        value: badAnswers,
        percentage: `${(badAnswers/totalQuestions)*100}%`,
        icon: CircleX,
        iconBg: "bg-red-100",
        iconColor: "text-red-500",
        percentColor: "text-red-500",
    },
    {
        title: "Total Marks",
        value: `${totalScore}/${totalMarks}`,
        percentage: `${(totalScore/totalMarks)*100}%`,
        icon: Trophy,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-500",
        percentColor: "text-blue-500",
    },
    ];

    const onClickHandler = () => {
        navigate(`/result/${id}`)
    };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-start gap-4">
            <div onClick={onClickHandler}>
                <MoveLeft size={50} className="bg-white p-3 rounded-md cursor-pointer hover:bg-gray-400 hover:text-white transition-all duration-200"/>
            </div>
            <div className="flex flex-col items-start gap-2">
                <div className="md:text-4xl text-2xl font-semibold">Question-wise Feedback </div>
                <p className="text-gray-500">Detailed Feedback for each question in your Interview</p>
            </div>
        </div>
        <div className="flex bg-white gap-2 border border-blue-300 p-3 rounded-2xl hover:bg-blue-100 transition-all duration-200 cursor-pointer"
            onClick={handleDownloadReport}>
            <Download className="text-blue-400" />
            <p className="text-blue-500">
                Download Report
            </p>
        </div>
      </div>
      {/* Stats section */}
      <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-5">
            {stats.map((item, index) => {
            const Icon = item.icon;

            return (
                <div
                key={index}
                className={`flex items-center gap-4 px-5 py-2 min-w-60 ${
                    index !== stats.length - 1
                    ? "md:border-r border-gray-200"
                    : ""
                }`}
                >
                {/* Icon */}
                <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.iconBg}`}
                >
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                    <p className="text-[15px] text-gray-500 font-medium leading-5">
                    {item.title}
                    </p>

                    <div className="flex items-end gap-2">
                    <h2 className="text-3xl font-semibold text-slate-900">
                        {item.value}
                    </h2>

                    {item.percentage && (
                        <span
                        className={`text-sm font-semibold mb-1 ${item.percentColor}`}
                        >
                        {item.percentage}
                        </span>
                    )}
                    </div>
                </div>
                </div>
            );
            })}
        </div>
      </div>
    </div>
  )
}

export default FeedbackHeader
