"use client";

import { Layout, Button, Avatar, Dropdown, Space } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "next/navigation";

const { Header } = Layout;

export default function HeaderBar({
  mobile,
  onMenuClick,
}: {
  mobile?: boolean;
  onMenuClick?: () => void;
}) {
  const router = useRouter();
  const { logout } = useLogout();

  const handleMenuClick = async ({ key }: { key: string }) => {
    if (key === "profile") {
      router.push("/dashboard/users/profile");
    }

    if (key === "logout") {
      try {
        await logout();
        router.replace("/login");
        console.log("Logout berhasil");
      } catch (err) {
        console.error("Logout gagal", err);
      }
    }
  };

  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      danger: true,
      label: "Logout",
    },
  ];

  return (
    <Header
      style={{
        padding: "0 16px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {mobile && (
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={onMenuClick}
          />
        )}
        <h3 style={{ margin: 0 }}>Dashboard</h3>
      </div>

      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        placement="bottomRight"
      >
        <Space style={{ cursor: "pointer" }}>
          <Avatar
            size="default"
            icon={<UserOutlined />}
            style={{ backgroundColor: "#1677ff" }}
          />
          {!mobile && <span style={{ fontWeight: 500 }}>Admin</span>}
        </Space>
      </Dropdown>
    </Header>
  );
}
