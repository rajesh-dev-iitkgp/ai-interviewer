import { Check } from "lucide-react"

const WeaknessCard = () => {
  return (
    <div className="p-5 bg-white rounded-2xl border border-gray-400 min-h-50">

      <h2 className="text-lg font-semibold text-red-500 mb-4">
        Areas to Improve
      </h2>

      <div className="flex flex-col gap-4">

        <div className="flex gap-2">
          <Check className="text-red-500" />
          <p className="text-md text-gray-700 wrap-break-words leading-7">
            Need more clarity on advanced topics
          </p>
        </div>

        <div className="flex gap-2">
          <Check className="text-red-500" />
          <p className="text-md text-gray-700 wrap-break-words leading-7">
            Work on in-depth explanations
          </p>
        </div>

      </div>

    </div>
  )
}

export default WeaknessCard