import { Check } from "lucide-react"

const WeaknessCard = ({weaknesses}) => {
  return (
    <div className="p-5 bg-white rounded-2xl border border-gray-400 min-h-50 col-span-1">

      <h2 className="text-lg font-semibold text-red-500 mb-4">
        Areas to Improve
      </h2>

      <div className="flex flex-col gap-4">
        {weaknesses.map((weakness,index)=>{
            return (
                <div className="flex gap-2" key={index}>
                    <Check className="text-red-500 shrink-0" size={20} />
                    <p className="text-sm text-gray-700 wrap-break-words leading-6">
                        {weakness}
                    </p>
                </div>
            )
        })}
      </div>

    </div>
  )
}

export default WeaknessCard