import {LineChart,Line, XAxis, YAxis,Tooltip, ResponsiveContainer, CartesianGrid} from "recharts";

const Progress = ({progress}) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-300 col-span-1">
        <h2 className="text-lg font-semibold mb-5">
            Score Progress
        </h2>

        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progress}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis domain={[0, 10]} />

            <Tooltip />

            <Line
                type="monotone"
                dataKey="score"
                stroke="#6D5DFB"
                strokeWidth={3}
            />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Progress
