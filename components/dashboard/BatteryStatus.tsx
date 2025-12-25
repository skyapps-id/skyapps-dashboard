import { Card, Typography } from "antd";

export default function BatteryStatus() {
  return (
    <Card title="Battery Pack Status">
      <Typography.Paragraph>State of Charge: <b>87%</b></Typography.Paragraph>
      <Typography.Paragraph>Total Voltage: <b>52.8 V</b></Typography.Paragraph>
      <Typography.Paragraph>Pack Current: <b>45.2 A</b></Typography.Paragraph>
      <Typography.Paragraph>Temperature: <b>28°C</b></Typography.Paragraph>
      <Typography.Paragraph>Health: <b style={{ color: "green" }}>Excellent</b></Typography.Paragraph>
    </Card>
  );
}
