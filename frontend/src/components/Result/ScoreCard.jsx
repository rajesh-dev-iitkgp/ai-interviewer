const ScoreCard = ({totalScore,totalMarks}) => {
    const percentage = (totalScore/totalMarks)*100
    return (
        <div className="flex flex-col gap- border border-gray-400 rounded-2xl p-6">
            <div className="text-lg font-semibold text-gray-500">Overall Score</div>
            <div className="flex items-center justify-center gap-20">
                <div className="flex flex-col items-center gap-0">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[56px] font-bold text-green-500 leading-none"> {totalScore}</h1>
                        <p className="text-[42px] font-semibold text-[#0f172a] mt-4"> /{totalMarks}</p>
                    </div>
                    <div className="text-gray-600 text-lg">
                        Great Job! Keep Improving 🚀
                    </div>
                </div>
                <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{ background: `conic-gradient( #22c55e ${percentage * 3.6}deg, #e5e7eb ${percentage * 3.6}deg )`}}>

                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                        <p className="text-4xl font-semibold text-[#0f172a]">{percentage}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

export default ScoreCard