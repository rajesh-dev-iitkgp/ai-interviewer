const ScoreCard = () => {
    return (
        <div className="flex flex-col gap- border border-gray-400 rounded-2xl p-6">
            <div className="text-lg font-semibold text-gray-500">Overall Score</div>
            <div className="flex items-center justify-center gap-20">
                <div className="flex flex-col items-center gap-0">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[56px] font-bold text-green-500 leading-none"> 8.2</h1>
                        <p className="text-[42px] font-semibold text-[#0f172a] mt-4"> /10</p>
                    </div>
                    <div className="text-gray-600 text-lg">
                        Great Job! Keep Improving 🚀
                    </div>
                </div>
                <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#0f172a]">82%</span>
                </div>
            </div>
        </div>
    )
  
}

export default ScoreCard