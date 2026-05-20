import { Check } from "lucide-react"

const IdealApproachCard = () => {
  return (
    <div className="p-5 bg-white rounded-2xl border border-gray-400 min-h-50">

      <h2 className="text-lg font-semibold text-blue-600 mb-4">
        Ideal Approach
      </h2>

      <div className="flex flex-col gap-4">

        <div className="flex gap-2">
          <Check className="text-blue-500" />
          <p className="text-md text-gray-700 wrap-break-words leading-7">
            Structure your answers better
          </p>
        </div>

        <div className="flex gap-2">
          <Check className="text-blue-500" />
          <p className="text-md text-gray-700 wrap-break-words leading-7">
            Add more real-world examples
          </p>
        </div>

      </div>

    </div>
  )
}

export default IdealApproachCard