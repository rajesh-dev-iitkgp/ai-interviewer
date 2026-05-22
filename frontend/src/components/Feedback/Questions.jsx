import { getStatus } from "../../utils/getStatus";
import { getScoreColor } from "../../utils/getScoreColor";


const Questions = ({ questions, currentQuestionIndex,setCurrentQuestionIndex}) => {
  
    return (

    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm col-span-2">

        {/* Header */}
        <div className="px-5 py-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-slate-900">
            Questions
            </h2>
        </div>

        {/* Questions */}
        <div className="flex flex-col">

            {questions.map((question, index) => {

            const status = getStatus(question.score);

            return (
                <div
                    key={question._id}
                    className={`
                        flex items-start justify-between gap-4
                        px-5 py-5 border-b border-gray-100
                        cursor-pointer transition-all duration-200
                        hover:bg-violet-50
                        ${
                        index === currentQuestionIndex
                            ? "bg-violet-50 border-l-4 border-l-violet-500"
                            : ""
                        }`}
                    onClick={() => setCurrentQuestionIndex(index)}
                    >

                    {/* Left */}
                    <div className="flex gap-4 flex-1">

                        {/* Number */}
                        <div className="min-w-7 h-7 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-medium">
                        {index + 1}
                        </div>

                        {/* Question */}
                        <p className="text-[15px] leading-6 font-medium text-slate-800 line-clamp-2">
                        {question.question}
                        </p>
                    </div>

                    {/* Score */}
                    <div
                        className={`
                        px-2 py-1 rounded-full text-sm font-semibold whitespace-nowrap
                        ${getScoreColor(status)}
                        `}
                    >
                        {question.score? question.score : 0}/10
                    </div>
                </div>
                );
            })}
        </div>
    </div>
    )
}

export default Questions
