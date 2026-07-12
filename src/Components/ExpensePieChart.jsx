import { PieChartIcon } from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

const COLORS = [
    "#4F46E5", 
    "#10B981", 
    "#F59E0B", 
    "#06B6D4",
    "#8B5CF6", 
    "#EC4899",
    "#84CC16", 
];

function ExpensePieChart({ data , isNoTransaction = false }) {
    const maxAmount = Math.max(...data.map((d) => d.amount));

    return isNoTransaction ? 
    <div className="bg-white p-4 border border-gray-200 rounded-xl">
      <div className="h-72 flex flex-col items-center justify-center">
        <PieChartIcon className="w-16 h-16 text-gray-400 mb-4" />

        <p className="font-semibold">
            No spending data
        </p>

        <p className="text-gray-500 text-sm">
            Your charts will appear here.
        </p>
      </div>

    </div>
    

    :
    (
        <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-4">
                Spending by Category
            </h2>

            <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="amount"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={entry.category}
                                fill={
                                    entry.amount === maxAmount
                                        ? "#991B1B"
                                        : COLORS[index % COLORS.length]
                                }
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ExpensePieChart;