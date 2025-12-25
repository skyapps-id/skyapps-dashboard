"use client";

import { Card, Progress, Space, Typography } from "antd";

const { Text } = Typography;

export default function PerformanceMetrics() {
  return (
    <Card
      title="Performance Metrics"
      style={{ height: "100%", width: "100%" }}
      styles={{
        body: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Space orientation="vertical" size={16} style={{ width: "100%" }}>
        <Metric
          label="AC Output Power"
          value="11.8 kW"
          percent={85}
          color="#1677ff"
        />
        <Metric
          label="AC Voltage"
          value="230.5 V"
          percent={95}
          color="#52c41a"
        />
        <Metric
          label="AC Current"
          value="51.2 A"
          percent={80}
          color="#fa8c16"
        />
        <Metric
          label="Frequency"
          value="50.02 Hz"
          percent={100}
          color="#722ed1"
        />
        <Metric
          label="Efficiency"
          value="97.2%"
          percent={97}
          color="#52c41a"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <Text>Total Energy Today</Text>
          <Text strong style={{ color: "#1677ff" }}>
            68.3 kWh
          </Text>
        </div>
      </Space>
    </Card>
  );
}

function Metric({
  label,
  value,
  percent,
  color,
}: {
  label: string;
  value: string;
  percent: number;
  color: string;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <Text>{label}</Text>
        <Text strong>{value}</Text>
      </div>
      <Progress
        percent={percent}
        showInfo={false}
        strokeColor={color}
      />
    </div>
  );
}
