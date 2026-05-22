import { Check } from "lucide-react"

const IdealApproachCard = ({idealApproach}) => {

    idealApproach = idealApproach.slice(0,2)
  return (
    <div className="p-5 bg-white rounded-2xl border border-gray-400 min-h-50">

      <h2 className="text-lg font-semibold text-blue-600 mb-4">
        Ideal Approach
      </h2>

      <div className="flex flex-col gap-4">
        {idealApproach.map((approach,index)=>{
            return (
                <div className="flex gap-2" key={index}>
                    <Check className="text-blue-500" size={40} />
                    <p className="text-sm text-gray-700 wrap-break-words leading-6">
                        {approach}
                    </p>
                </div>
            )
        })}

      </div>

    </div>
  )
}

export default IdealApproachCard