"use client";

import { Button, Form, Input, InputNumber } from "antd";

export default function ProductForm({
  onSubmit,
  loading,
}: any) {
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={loading}>
        Create Product
      </Button>
    </Form>
  );
}
