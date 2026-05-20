import Header from "../components/Result/Header"
import ScoreCard from "../components/Result/ScoreCard"
import FeedbackSection from "../components/Result/FeedbackSection"
import Button from "../components/Common/Button"

const Result = () => {
    return (
    <div className="min-h-screen bg-[#f5f7fb] p-6">
      <div className="w-5xl mx-auto flex flex-col gap-6">
        <Header />
        <ScoreCard />
        <FeedbackSection />
          <Button text="View Question-wise Feedback" />
      </div>
    </div>
  )
}

export default Result
