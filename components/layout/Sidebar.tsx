"use client";

import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

const { Sider } = Layout;
const SIDEBAR_WIDTH = 220;
const HEADER_HEIGHT = 64;

export default function Sidebar({
  mobile,
  onNavigate,
  style,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
  style?: React.CSSProperties;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path: string) => {
    router.push(path);
    onNavigate?.();
  };

  /** highlight parent route */
  const selectedKey =
    pathname.startsWith("/dashboard/products")
      ? "/dashboard/products"
      : "/dashboard";

  return (
    <Sider
      width={SIDEBAR_WIDTH}
      collapsible={!mobile}
      collapsedWidth={mobile ? 0 : 80}
      style={{
        background: "#001529",
        height: "100vh",
        position: mobile ? "relative" : "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        ...style,
      }}
    >
      {/* LOGO */}
      <div
        style={{
          height: HEADER_HEIGHT,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        Skyapps
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={[
          {
            key: "/dashboard",
            icon: <DashboardOutlined />,
            label: "Dashboard",
            onClick: () => handleNavigate("/dashboard"),
          },
          {
            key: "/dashboard/products",
            icon: <AppstoreOutlined />,
            label: "Devices",
            onClick: () =>
              handleNavigate("/dashboard/products"),
          },
        ]}
      />
    </Sider>
  );
}
