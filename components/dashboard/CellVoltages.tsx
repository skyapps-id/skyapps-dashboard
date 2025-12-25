import { Card, Row, Col } from "antd";

export default function CellVoltages() {
  return (
    <Card title="Cell Voltages">
      <Row gutter={[12, 12]}>
        {Array.from({ length: 16 }).map((_, i) => (
          <Col xs={12} md={6} key={i}>
            <Card size="small" style={{ background: "#f6ffed" }}>
              Cell {i + 1}
              <div style={{ fontWeight: 600 }}>3.30{i % 5} V</div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
