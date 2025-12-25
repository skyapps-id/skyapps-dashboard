"use client";

import ProductForm from "@/components/forms/ProductForm";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { message } from "antd";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
  const router = useRouter();
  const mutation = useCreateProduct();

  const onSubmit = async (values: any) => {
    await mutation.mutateAsync(values);
    message.success("Product created");
    router.push("/dashboard/products");
  };

  return (
    <ProductForm
      onSubmit={onSubmit}
      loading={mutation.isPending}
    />
  );
}
