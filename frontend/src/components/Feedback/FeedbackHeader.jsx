import { MoveLeft,Download,ClipboardList,CircleCheckBig,CircleMinus,CircleX,Trophy, } from "lucide-react"

const FeedbackHeader = () => {

    const stats = [
    {
        title: "Total Questions",
        value: 5,
        percentage: "",
        icon: ClipboardList,
        iconBg: "bg-violet-100",
        iconColor: "text-violet-500",
    },
    {
        title: "Good Answers",
        value: 3,
        percentage: "60%",
        icon: CircleCheckBig,
        iconBg: "bg-green-100",
        iconColor: "text-green-500",
        percentColor: "text-green-500",
    },
    {
        title: "Average Answers",
        value: 1,
        percentage: "20%",
        icon: CircleMinus,
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-500",
        percentColor: "text-yellow-500",
    },
    {
        title: "Improve",
        value: 1,
        percentage: "20%",
        icon: CircleX,
        iconBg: "bg-red-100",
        iconColor: "text-red-500",
        percentColor: "text-red-500",
    },
    {
        title: "Total Marks",
        value: "82/100",
        percentage: "82%",
        icon: Trophy,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-500",
        percentColor: "text-blue-500",
    },
    ];
    
  return (
    <div className="flex flex-col px-8 py-4 gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
            <div>
                <MoveLeft size={50} className="bg-white p-3 rounded-md cursor-pointer hover:bg-gray-400 hover:text-white transition-all duration-200"/>
            </div>
            <div className="flex flex-col items-start gap-2">
                <div className="text-4xl font-semibold">Question-wise Feedback </div>
                <p className="text-gray-500">Detailed Feedback for each question in your Interview</p>
            </div>
        </div>
        <div className="flex bg-white gap-2 border border-blue-300 p-3 rounded-2xl hover:bg-blue-100 transition-all duration-200 cursor-pointer">
            <Download className="text-blue-400" />
            <p className="text-blue-500">Download Report</p>
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
