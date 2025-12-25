import { Card } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "06:00", pv: 2, battery: 1, load: 2 },
  { time: "08:00", pv: 6, battery: 3, load: 4 },
  { time: "10:00", pv: 10, battery: 5, load: 6 },
  { time: "12:00", pv: 12, battery: 5.5, load: 7 },
  { time: "14:00", pv: 11, battery: 5, load: 7 },
  { time: "16:00", pv: 9, battery: 4, load: 6 },
  { time: "18:00", pv: 5, battery: 2, load: 4 },
];

export default function PowerChart() {
  return (
    <Card title="Power Generation Trend">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#1677ff" />
          <Line type="monotone" dataKey="battery" stroke="#52c41a" />
          <Line type="monotone" dataKey="load" stroke="#fa8c16" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
