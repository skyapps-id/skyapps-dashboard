"use client";

import { Row, Col, Typography, Space, Button } from "antd";
import {
  ReloadOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import StatCard from "@/components/dashboard/StatCard";
import PowerChart from "@/components/dashboard/PowerChart";
import InverterInfo from "@/components/dashboard/InverterInfo";
import PerformanceMetrics from "@/components/dashboard/PerformanceMetrics";
import BatteryStatus from "@/components/dashboard/BatteryStatus";
import CellVoltages from "@/components/dashboard/CellVoltages";

const { Title, Text } = Typography;

export default function DashboardPage() {
  return (
    <Space orientation="vertical" size={24} style={{ width: "100%" }}>
      {/* HEADER */}
      <div>
        <Title level={2}>Solar Panel Monitoring Dashboard</Title>
        <Text type="secondary">
          Real-time telemetry and system performance monitoring
        </Text>
      </div>

      {/* MPPT HEADER */}
      <Row justify="space-between" align="middle">
        <Title level={4}>MPPT Telemetry</Title>
        <Space>
          <Button icon={<ClockCircleOutlined />}>Last 24h</Button>
          <Button icon={<ReloadOutlined />} />
        </Space>
      </Row>

      {/* STAT CARDS */}
      <Row gutter={[16, 16]} align="stretch">
        <Col xs={24} md={8} style={{ display: "flex" }}>
          <StatCard
            title="PV Voltage"
            value="385.2 V"
            items={[
              ["PV Current", "32.4 A"],
              ["PV Power", "12.48 kW"],
            ]}
          />
        </Col>

        <Col xs={24} md={8} style={{ display: "flex" }}>
          <StatCard
            title="Battery Voltage"
            value="52.8 V"
            items={[
              ["Battery Current", "45.2 A"],
              ["Charge State", "Charging"],
            ]}
          />
        </Col>

        <Col xs={24} md={8} style={{ display: "flex" }}>
          <StatCard
            title="Load Power"
            value="8.3 kW"
            highlight="96.8%"
            items={[
              ["Load Current", "35.6 A"],
              ["Efficiency", "96.8%"],
            ]}
          />
        </Col>
      </Row>

      {/* CHART */}
      <PowerChart />

      {/* INVERTER */}
      <Title level={4}>Inverter Telemetry</Title>

      <Row gutter={[16, 16]} align="stretch">
        <Col xs={24} md={12} style={{ display: "flex" }}>
          <InverterInfo />
        </Col>

        <Col xs={24} md={12} style={{ display: "flex" }}>
          <PerformanceMetrics />
        </Col>
      </Row>

      {/* BATTERY */}
      <Title level={4}>BMS Telemetry</Title>

      <Row gutter={[16, 16]} align="stretch">
        <Col xs={24} md={8} style={{ display: "flex" }}>
          <BatteryStatus />
        </Col>
        <Col xs={24} md={16} style={{ display: "flex" }}>
          <CellVoltages />
        </Col>
      </Row>
    </Space>
  );
}