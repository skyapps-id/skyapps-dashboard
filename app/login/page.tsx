"use client";

import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  message,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";

const { Title, Text } = Typography;

export default function LoginPage() {
  const router = useRouter();
  const { login, loading } = useLogin();

  const onFinish = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      await login(values.email, values.password);
      message.success("Login berhasil");
      router.push("/dashboard");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fa",
      }}
    >
      <Card style={{ width: 380, borderRadius: 12 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          SkyApps Login
        </Title>

        <Text
          type="secondary"
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Sign in to continue
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true },
              { type: "email" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="email@example.com"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="••••••••"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
          >
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
