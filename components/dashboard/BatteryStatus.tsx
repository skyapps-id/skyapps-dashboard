import { Card, Tag } from "antd";

const rows = [
  ["State of Charge", "87%"],
  ["Total Voltage", "52.8 V"],
  ["Pack Current", "45.2 A"],
  ["Temperature", "28°C"],
  ["Health", "Excellent"],
];

export default function BatteryStatus() {
  return (
    <Card
      title="Battery Pack Status"
      extra={<Tag color="green">Normal</Tag>}
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
        {rows.map(([label, value]) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <span style={{ color: "#8c8c8c" }}>
              {label}
            </span>

            <strong
              style={{
                color:
                  label === "Health"
                    ? "#52c41a"
                    : undefined,
              }}
            >
              {value}
            </strong>
          </div>
        ))}
      </div>
    </Card>
  );
}
