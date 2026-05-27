import StrengthCard from "./StrengthCard"
import WeaknessCard from "./WeaknessCard"
import IdealApproachCard from "./IdealApproachCard"

const FeedbackSection = ({overallFeedback}) => {
    const strengths = overallFeedback.strengths
    const weaknesses = overallFeedback.weaknesses
    const idealApproach = overallFeedback.idealApproach


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        <div className="w-full">
            <StrengthCard 
                strengths={strengths}/>
        </div>
        <div className="w-full">
            <WeaknessCard 
                weaknesses={weaknesses}/>
        </div>
        <div className="w-full">
            <IdealApproachCard 
                idealApproach={idealApproach}/>
        </div>
    </div>
  )
}

export default FeedbackSection