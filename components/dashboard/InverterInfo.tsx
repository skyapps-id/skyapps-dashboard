"use client";

import { Card, Typography, Tag, Space } from "antd";

const { Text } = Typography;

export default function InverterInfo() {
  return (
    <Card
      title="Device Information"
      extra={<Tag color="green">Active</Tag>}
    >
      <Space orientation="vertical" size={12} style={{ width: "100%" }}>
        <InfoRow label="Model" value="SolarMax Pro 15K" />
        <InfoRow label="Serial Number" value="INV-2024-0158" />
        <InfoRow label="Firmware" value="v3.2.1" />
        <InfoRow label="Operating Hours" value="12,458 hrs" />
        <InfoRow label="Temperature" value="42°C" />
        <InfoRow
          label="Status"
          value="Normal Operation"
          valueColor="green"
        />
      </Space>
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
      }}
    >
      <Text type="secondary">{label}</Text>
      <Text strong style={{ color: valueColor }}>
        {value}
      </Text>
    </div>
  );
}
