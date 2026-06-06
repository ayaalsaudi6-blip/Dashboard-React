import { LineChart, Line, XAxis,YAxis,Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 500 },
  { month: "Apr", sales: 700 },
  { month: "May", sales: 600 },
];

function SalesChart({ darkMode }) {
  return (
    <div
      style={{ background: darkMode ? "#1f2937" : "#fff", padding: "20px", borderRadius: "10px",marginTop: "20px", }}>
      <h3 style={{ color: darkMode ? "#fff" : "#000" }}> Sales Overview</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" stroke={darkMode ? "#f3f4f6" : "#111827"} />
        <YAxis stroke={darkMode ? "#f3f4f6" : "#111827"} />         
        <Tooltip contentStyle={{backgroundColor: darkMode ? "#1f2937" : "#fff",border: "none",color: darkMode ? "#f3f4f6" : "#111827"
  }}
/>          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default SalesChart;