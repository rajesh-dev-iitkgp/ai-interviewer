
const OverviewCard = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm w-60 flex flex-col items-center gap-y-1">
        <p className="font-bold text-2xl">12</p>
        <p className="text-xl font-semibold text-slate-800">Interviews Taken</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm w-60 flex flex-col items-center gap-y-1">
        <p className="font-bold text-2xl text-green-700">8.2/10</p>
        <p className="text-xl font-semibold text-slate-800">Average Score</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm w-60 flex flex-col items-center gap-y-1">
        <p className="font-bold text-2xl text-violet-500">85%</p>
        <p className="text-xl font-semibold text-slate-800">Improvement</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm w-60 flex flex-col items-center gap-y-1">
        <p className="font-bold text-2xl text-yellow-600">6</p>
        <p className="text-xl font-semibold text-slate-800">Best Streak</p>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm w-60 flex flex-col items-center gap-y-1">
        <p className="font-bold text-2xl text-red-500">40%</p>
        <p className="text-xl font-semibold text-slate-800">Weakness</p>
      </div>
    </div>
  )
}

export default OverviewCard
