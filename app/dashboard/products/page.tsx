"use client";

import { Table } from "antd";
import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  const { data, isLoading } = useProducts();

  return (
    <Table
      loading={isLoading}
      dataSource={data}
      rowKey="id"
      columns={[
        { title: "Name", dataIndex: "name" },
        { title: "Price", dataIndex: "price" },
      ]}
    />
  );
}
