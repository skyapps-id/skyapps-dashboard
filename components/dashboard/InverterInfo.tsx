"use client";

import { Card, Typography, Tag, Divider } from "antd";

const { Text } = Typography;

const rows = [
  ["Model", "SolarMax Pro 15K"],
  ["Serial Number", "INV-2024-0158"],
  ["Firmware", "v3.2.1"],
  ["Operating Hours", "12,458 hrs"],
  ["Temperature", "42°C"],
  ["Status", "Normal Operation", "green"],
];

export default function InverterInfo() {
  return (
    <Card
      title="Device Information"
      extra={<Tag color="green">Active</Tag>}
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
      <div>
        {rows.map(([label, value, color], index) => (
          <div key={label}>
            <InfoRow
              label={label}
              value={value}
              valueColor={color}
            />

            {index < rows.length - 1 && (
              <Divider
                style={{
                  margin: "14px 0",
                  borderColor: "#f0f0f0",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

function InfoRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "8px 0",
      }}
    >
      <Text type="secondary">{label}</Text>
      <Text strong style={{ color: valueColor }}>
        {value}
      </Text>
    </div>
  );
}
