import { Clock } from "lucide-react"

const InrerviewHeader = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">

      <div>
        <h1 className="text-xl font-semibold">
          Frontend Developer Interview
        </h1>

        <p className="text-sm text-gray-500">
          Question 2 of 5
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="px-4 py-2 border border-gray-400 rounded-xl flex items-center gap-2">
          <Clock size={18} />
          <span>08:45</span>
        </div>

        <button className="bg-red-50 text-red-500 px-4 py-2 rounded-xl border border-red-200 cursor-pointer hover:bg-red-100 transition-all duration-200">
          End Interview
        </button>

      </div>

    </div>
  )
}

export default InrerviewHeader
