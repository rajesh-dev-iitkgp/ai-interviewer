import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from "recharts";

const Performance = ({performance}) => {
  return (
    <div>
      <div className="bg-white p-5 rounded-2xl border border-slate-300">
        <h2 className="text-lg font-semibold mb-5">
          Performance % by Role
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={performance}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              type="number"
              domain={[0, 100]}
            />

            <YAxis
              type="category"
              dataKey="role"
              width={140}
            />

            <Tooltip />

            <Bar
              dataKey="score"
              fill="#5B4CF0"
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Performance
