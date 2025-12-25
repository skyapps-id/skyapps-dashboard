"use client";

import { useEffect, useState } from "react";
import { Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import { Providers } from "./providers";

const { Title, Text } = Typography;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const MIN_LOADING_TIME = 500;

    const timer = setTimeout(() => {
      setReady(true);
    }, MIN_LOADING_TIME);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {!ready ? (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f5f5f5",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{ fontSize: 48, color: "#1677ff" }}
                    spin
                  />
                }
              />
              <Title level={4} style={{ marginTop: 16 }}>
                Loading Application
              </Title>
              <Text type="secondary">
                Initializing dashboard…
              </Text>
            </div>
          </div>
        ) : (
          <Providers>{children}</Providers>
        )}
      </body>
    </html>
  );
}
