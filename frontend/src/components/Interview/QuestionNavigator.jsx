
const QuestionNavigator = ({currentQuestionIndex, totalQuestions, setCurrentQuestionIndex, answers, reviewQuestions}) => {

    const questions = Array.from({ length: totalQuestions },(_, index) => index + 1)
    const legends = [
        {
            label: "Answered",
            color: "bg-green-500",
        },
        {
            label: "Current",
            color: "bg-violet-500",
        },
        {
            label: "Unanswered",
            color: "bg-gray-200",
        },
        {
        label: "Marked for review",
        color: "bg-yellow-400"
        }
    ]

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">

        <h3 className="font-semibold mb-5">
            Questions
        </h3>

        <div className="flex flex-col gap-3">

            {questions.map((q, index) => (
            <button
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200
                        ${
                            currentQuestionIndex === index
                            ? "bg-violet-500 text-white"
                            : reviewQuestions.includes(index)
                            ? "bg-yellow-400 text-white": 
                            answers[index]?.userAnswer.trim() !== ""
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 hover:bg-gray-300"
                        }`}
                onClick={() => setCurrentQuestionIndex(index)}
            >
                {q}
            </button>
            ))}

        </div>

        <div className="mt-8 flex flex-col gap-3">

            {legends.map((item, index) => (
                <div
                key={index}
                className="flex items-center gap-3"
                >
                <div
                    className={`w-3 h-3 rounded-full ${item.color}`}
                />

                <p className="text-md text-gray-600">
                    {item.label}
                </p>
                </div>
            ))}

        </div>

    </div>
  )
}

export default QuestionNavigator
