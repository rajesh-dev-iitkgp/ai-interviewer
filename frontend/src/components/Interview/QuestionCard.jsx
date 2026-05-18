
const QuestionCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">
            Question
            </p>

            <h2 className="text-lg font-medium">
            What is the Virtual DOM in React? How does it work?
            </h2>
        </div>

        <textarea
            placeholder="Type your answer here..."
            className="w-full h-80 border border-gray-400 rounded-xl p-4 outline-none resize-none focus:ring-2 focus:ring-violet-500"
        />

        <div className="flex justify-end mt-2">
            <p className="text-sm text-gray-400">
            0 / 2000 words
            </p>
        </div>

        <div className="flex items-center justify-between mt-8">

            <button className="border px-5 py-2 rounded-xl cursor-pointer hover:bg-indigo-50">
            Previous
            </button>

            <div className="flex gap-3">

            <button className="border px-5 py-2 rounded-xl cursor-pointer hover:bg-indigo-50">
                Mark for Review
            </button>

            <button className="bg-violet-500 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-violet-600">
                Next
            </button>

            </div>

        </div>

    </div>
  )
}

export default QuestionCard
