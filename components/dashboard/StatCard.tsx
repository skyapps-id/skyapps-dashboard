import { Card, Tag } from "antd";

type Props = {
  title: string;
  value: string;
  status?: string;
  highlight?: string;
  items: [string, string][];
};

export default function StatCard({
  title,
  value,
  highlight,
  items,
}: Props) {
  return (
    <Card
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
      {/* TOP */}
      <div>
        <div style={{ color: "#8c8c8c", marginBottom: 4 }}>
          {title}
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          {value}
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        {items.map(([label, val]) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <span>{label}</span>
            <strong
              style={{
                color:
                  highlight && val === highlight
                    ? "#fa8c16"
                    : undefined,
              }}
            >
              {val}
            </strong>
          </div>
        ))}
      </div>
    </Card>
  );
}
