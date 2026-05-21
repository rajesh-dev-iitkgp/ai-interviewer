import FeedbackHeader from "../components/Feedback/FeedbackHeader"
import QuestionFeedback from "../components/Feedback/QuestionFeedback"
import Questions from "../components/Feedback/Questions"

const Feedback = () => {
  return (
    <div className="bg-[#f5f7fb] flex flex-col gap-4 px-8 py-4">
        <FeedbackHeader />
        <div className="grid grid-cols-7 gap-2">
            <Questions />
            <QuestionFeedback />
        </div>
    </div>
  )
}

export default Feedback
