import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { year: 2016, balance: 10, transactions: 5 },
  { year: 2017, balance: 20, transactions: 10 },
  { year: 2018, balance: 15, transactions: 8 },
  { year: 2019, balance: 25, transactions: 12 },
  { year: 2020, balance: 18, transactions: 9 },
  { year: 2021, balance: 30, transactions: 14 },
  { year: 2022, balance: 28, transactions: 13 },
];

export default function BalanceChart() {
  return (
    <div className="bg-white   h-59 min-w-[100px]">
      {data?.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data ?? []}
            margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
          >
            <CartesianGrid stroke="#F1F1F1" />

            <XAxis
              dataKey="year"
              stroke="#7D7D7D"
              fontSize={12}
              axisLine={false}
              tickLine={{ stroke: "#F1F1F1", strokeWidth: 1 }}
              tick={<CustomXAxisTick val="Xaxis" />}
            />
            <YAxis
              stroke="#7D7D7D"
              fontSize={12}
              width={25}
              // padding={{ bottom: 10 }}
              axisLine={false}
              tickLine={{ stroke: "#F1F1F1", strokeWidth: 1 }}
              tick={<CustomXAxisTick val="Yaxis" />}
              // tickLine={false}
            />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="transactions"
              stroke="#22C55E"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

const CustomXAxisTick = ({ x, y, payload, val }) => {
  return (
    <text
      x={val == "Yaxis" ? x - 12 : x}
      y={val == "Xaxis" ? y + 12 : y} // 👈 move text down to create gap from tick line
      fill="#7D7D7D"
      fontSize={12}
      textAnchor="middle"
    >
      {payload.value}
    </text>
  );
};
