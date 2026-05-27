import { User2,Check,AlertCircle} from "lucide-react"
import { getStatus } from "../../utils/getStatus"
import { getScoreColor } from "../../utils/getScoreColor"

const QuestionFeedback = ({totalQuestions,currentQuestion,currentQuestionIndex,setCurrentQuestionIndex}) => {

    const status = getStatus(currentQuestion.score);
    const scoreColor = getScoreColor(status);

  return (
    <div className="flex flex-col gap-6 p-4 bg-white md:col-span-5 w-full rounded-2xl border border-gray-200 shadow-sm order-1 md:order-2">
      <div className="flex flex-col gap-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-violet-600 font-semibold">
            Question {currentQuestionIndex + 1} of {totalQuestions}
            </p>
            {/* Buttons */}
            <div className="flex items-center justify-between md:gap-4">
                <button className={`border border-gray-300 px-5 py-2 rounded-xl transition-all duration-200 ${currentQuestionIndex === 0? "opacity-50":"hover:bg-gray-100"}`}
                    onClick={() => setCurrentQuestionIndex(prev=>prev-1)}
                    disabled={currentQuestionIndex === 0}>
                    &lt; Previous
                </button>

                <button className={`bg-blue-600 text-white px-5 py-2 rounded-xl transition-all duration-200 ${currentQuestionIndex === totalQuestions - 1? "opacity-50":"hover:bg-blue-700"}`}
                    onClick={() => setCurrentQuestionIndex(prev=>prev+1)}
                    disabled={currentQuestionIndex === totalQuestions - 1}>
                    Next &gt;
                </button>
            </div>
        </div>
        {/* Question + Score */}
        <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-10">
            {/* Question */}
            <div className="flex-1 max-w-4xl">
                <h1 className="text-lg font-semibold leading-tight text-slate-900 wrap-word-break">
                    {currentQuestion.question}
                </h1>
            </div>
            {/* Score */}
            <div className="min-w-35 flex flex-col md:items-end md:gap-3 gap-1">
                <p className="text-lg font-semibold text-slate-800">
                    Your Score
                </p>
                <div className="flex items-center gap-3">

                    <p className={`md:text-3xl text-2xl font-bold ${scoreColor}`}>
                        <span>{currentQuestion.score}</span>
                        <span className="text-slate-700 text-xl">/10</span>
                    </p>
                    <p className={`
                        px-3 py-1 rounded-xl font-medium
                        ${
                        status === "good"? "bg-green-100 text-green-600"
                            : status === "average" ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}>
                        {status}
                    </p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
            <User2 className="text-blue-600" />
            <p className="text-lg font-semibold">Your Answer</p>
        </div>
        <div className="bg-violet-200 p-4 rounded-xl border border-gray-200 leading-7">
            {currentQuestion.userAnswer? currentQuestion.userAnswer : "No answer provided"}
        </div>
      </div>
      <div>
        <p className="text-blue-600 font-semibold text-lg mb-1">Ideal Answer</p>
        <p className="bg-violet-50 p-4 rounded-xl border border-violet-300 leading-7">
            {currentQuestion.feedback.idealApproach[0]}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 bg-green-100 p-4 rounded-xl border border-green-300">
            <p className="text-green-500 font-semibold text-lg mb-4">Strength</p>
            <div className="flex gap-2">
                <Check className="text-white bg-green-400 rounded-full p-1 shrink-0" />
                <p>{currentQuestion.feedback.strengths[0]!="N/A"? currentQuestion.feedback.strengths[0] : "Question not answered to give this feedback"}</p>
            </div>
        </div>
        <div className="col-span-1 bg-red-100 p-4 rounded-xl border border-red-300">
            <p className="text-red-500 font-semibold text-lg mb-4">Weakness</p>
            <div className="flex gap-2">
                <AlertCircle className="rounded-full text-red-500 fill-red-500/20 shrink-0" />
                <p>{currentQuestion.feedback.weaknesses[0]}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionFeedback
