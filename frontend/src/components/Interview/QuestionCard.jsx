
const QuestionCard = ({question,currentQuestionIndex,setCurrentQuestionIndex,totalQuestions,answer,setAnswers,toggleReview,reviewQuestions,handleSubmitInterview}) => {
  
    const handleAnswerChange = (e)=>{
        setAnswers(prev => {
            const updated = [...prev];

            updated[currentQuestionIndex] = {
                ...updated[currentQuestionIndex],
                answer: e.target.value
            };

            return updated;
        });
    }

    const wordCount =answer.trim() === "" ? 0: answer.trim().split(/\s+/).length;
  
    return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">
            Question
            </p>

            <h2 className="text-lg font-medium">
            {question?.question}
            </h2>
        </div>

        <textarea
            placeholder="Type your answer here..."
            className="w-full h-80 border border-gray-400 rounded-xl p-4 outline-none resize-none focus:ring-2 focus:ring-violet-500"
            value={answer}
            onChange={handleAnswerChange}
        />

        <div className="flex justify-end mt-2">
            <p className="text-sm text-gray-400">
            {wordCount} / 200 words
            </p>
        </div>

        <div className="flex items-center justify-between mt-8">

            <button className="border border-gray-400 px-5 py-2 rounded-xl cursor-pointer hover:bg-indigo-50"
                onClick={() => setCurrentQuestionIndex(prev=>prev-1)}
                disabled={currentQuestionIndex===0}>
            Previous
            </button>

            <div className="flex gap-3">

            <button className={`border border-gray-400 px-5 py-2 rounded-xl cursor-pointer hover:bg-yellow-500 ${reviewQuestions.includes(currentQuestionIndex) ? 'bg-yellow-400 text-white' : ''}`}
                onClick={() => toggleReview(currentQuestionIndex)}>
                {reviewQuestions.includes(currentQuestionIndex) ? 'Marked for review' : 'Mark for review'}
            </button>

            <button className="bg-violet-500 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-violet-600"
                onClick={() => {
                    if(currentQuestionIndex === totalQuestions - 1){
                        handleSubmitInterview();
                    } else {
                        setCurrentQuestionIndex(prev => prev + 1);
                    }
                }}>
                {currentQuestionIndex===totalQuestions-1 ? 'Submit' : 'Next'}
            </button>

            </div>

        </div>

    </div>
  )
}

export default QuestionCard
