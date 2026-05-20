import StrengthCard from "./StrengthCard"
import WeaknessCard from "./WeaknessCard"
import IdealApproachCard from "./IdealApproachCard"

const FeedbackSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 items-stretch">
        <div className="w-full">
            <StrengthCard />
        </div>
        <div className="w-full">
            <WeaknessCard />
        </div>
        <div className="w-full">
            <IdealApproachCard />
        </div>
    </div>
  )
}

export default FeedbackSection