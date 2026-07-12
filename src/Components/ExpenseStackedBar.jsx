import { ChartColumnStacked } from "lucide-react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

function ExpenseStackedBar({ data ,isNoTransaction = false }) {
    return isNoTransaction ?
    <div className="bg-white p-4 border border-gray-200 rounded-xl">
      <div className="h-72 flex flex-col items-center justify-center">
        <ChartColumnStacked className="w-16 h-16 text-gray-400 mb-4" />

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
        <div className="bg-white border border-gray-200 rounded-xl p-5 mt-5">
            <h2 className="text-xl font-semibold mb-4">
                Spending by Month
            </h2>

            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={data}
                    layout="vertical"
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis type="number" />

                    <YAxis
                        type="category"
                        dataKey="month"
                    />

                    <Tooltip />
                    <Legend />

                    <Bar dataKey="Foods" stackId="expense" fill="#4F46E5" />
                    <Bar dataKey="Grocery" stackId="expense" fill="#DC2626" />
                    <Bar dataKey="Transportation" stackId="expense" fill="#06B6D4" />
                    <Bar dataKey="Shopping" stackId="expense" fill="#F59E0B" />
                    <Bar dataKey="Utilities" stackId="expense" fill="#10B981" />
                    <Bar dataKey="Entertainment" stackId="expense" fill="#8B5CF6" />
                    <Bar dataKey="Health" stackId="expense" fill="#EC4899" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ExpenseStackedBar;