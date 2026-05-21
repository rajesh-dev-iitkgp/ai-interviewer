import { User2,Check,AlertCircle} from "lucide-react"

const QuestionFeedback = () => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-white col-span-5 w-full rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-blue-600 font-semibold">Question 1 of 5 </div>
        <div className="flex gap-4">
            <button className="border border-gray-400 px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-50 transition-all duration-200"> &lt; Previous </button>
            <button className="border border-gray-400 px-4 py-2 rounded-lg cursor-pointer bg-blue-600 text-white hover:bg-indigo-50 transition-all duration-200"> Next &gt; </button>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div className="text-3xl font-semibold">What is React?</div>
        <div className="flex flex-col gap-2 items-start mr-50">
            <p className="text-lg font-semibold">Your Score</p>
            <div className="flex gap-6">
                <p><span className="font-semibold text-2xl text-green-500">9</span>/10</p>
                <p className="bg-green-200 text-green-500 px-2 py-1 rounded-lg">Good</p>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
            <User2 className="text-blue-600" />
            <p className="text-lg font-semibold">Your Answer</p>
        </div>
        <div className="bg-violet-200 p-4 rounded-xl border border-gray-200 leading-7">React is a JavaScript library for building user interfaces</div>
      </div>
      <div>
        <p className="text-blue-600 font-semibold text-lg mb-1">Ideal Answer</p>
        <p className="bg-violet-50 p-4 rounded-xl border border-violet-300 mb-4 leading-7">React is a JavaScript library for building user interfaces</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-green-100 p-4 rounded-xl border border-green-300">
            <p className="text-green-500 font-semibold text-lg mb-4">Strength</p>
            <div className="flex gap-1">
                <Check className="text-white bg-green-400 rounded-full p-1" />
                <p>Able to answer the question</p>
            </div>
        </div>
        <div className="col-span-1 bg-red-100 p-4 rounded-xl border border-red-300">
            <p className="text-red-500 font-semibold text-lg mb-4">Weakness</p>
            <div className="flex gap-1">
                <AlertCircle className="rounded-full text-red-500 fill-red-500/20" />
                <p>Unable to answer the question</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionFeedback
