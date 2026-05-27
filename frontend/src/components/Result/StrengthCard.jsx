import { Check } from "lucide-react"

const StrengthCard = ({strengths}) => {
  return (
    <div className="p-5 bg-white rounded-2xl border border-gray-400 min-h-50 col-span-1">

      <h2 className="text-lg font-semibold text-green-600 mb-4">
        Strengths
      </h2>

      <div className="flex flex-col gap-4">

        {strengths.map((strength,index)=>{
            return (
                <div className="flex gap-2 items-start" key={index}>
                    <Check className="text-green-500 shrink-0" size={20}/>
                    <p className="text-sm text-gray-700 wrap-break-words leading-6">
                        {strength}
                    </p>
                </div>
            )
        })}

      </div>

    </div>
  )
}

export default StrengthCard