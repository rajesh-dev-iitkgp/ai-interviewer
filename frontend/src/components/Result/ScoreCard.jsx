const ScoreCard = ({totalScore,totalMarks}) => {
    const percentage = (totalScore/totalMarks)*100
    return (
        <div className="flex flex-col gap- border border-gray-400 rounded-2xl p-6">
            <div className="text-lg font-semibold text-gray-500">Overall Score</div>
            <div className="flex items-center justify-center gap-20">
                <div className="flex flex-col items-center gap-0">
                    <div className="flex items-center gap-2">
                        <h1 className="md:text-[56px] text-4xl font-bold text-green-500 leading-none"> {totalScore}</h1>
                        <p className="md:text-[42px] text-3xl font-semibold text-[#0f172a] mt-4">/{totalMarks}</p>
                    </div>
                    <div className="text-gray-600 text-md md:text-lg">
                        {percentage > 50? "Good Job! Keep Improving 🚀" : "You can Improve next time "}
                    </div>
                </div>
                <div className="md:w-32 md:h-32 w-24 h-24 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `conic-gradient( #22c55e ${percentage * 3.6}deg, #e5e7eb ${percentage * 3.6}deg )`}}>

                    <div className="md:w-24 md:h-24 w-20 h-20 bg-white rounded-full flex items-center justify-center">
                        <p className="md:text-4xl text-2xl font-semibold text-[#0f172a]">{percentage}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

export default ScoreCard