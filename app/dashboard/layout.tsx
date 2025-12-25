"use client";

import { Layout, Grid, Drawer } from "antd";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import HeaderBar from "@/components/layout/Header";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const SIDEBAR_WIDTH = 220;
const HEADER_HEIGHT = 64;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      {/* DESKTOP FIXED SIDEBAR */}
      {!isMobile && (
        <Sidebar
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            width: SIDEBAR_WIDTH,
          }}
        />
      )}

      {/* MOBILE DRAWER */}
      <Drawer
        placement="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        closable={false}
        size={SIDEBAR_WIDTH}
        styles={{
          body: {
            padding: 0,
            height: "100vh",
          },
        }}
      >
        <Sidebar
          mobile
          onNavigate={() => setDrawerOpen(false)}
        />
      </Drawer>

      {/* MAIN AREA */}
      <Layout
        style={{
          marginLeft: !isMobile ? SIDEBAR_WIDTH : 0,
          height: "100vh",
        }}
      >
        <HeaderBar
          mobile={isMobile}
          onMenuClick={() => setDrawerOpen(true)}
        />

        <Content
          style={{
            height: `calc(100vh - ${HEADER_HEIGHT}px)`,
            overflow: "auto",
            padding: 24,
            background: "#f5f5f5",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
