import { apiFetch } from "@/lib/api";
import { Product } from "@/types/product";

export function getProducts(): Promise<Product[]> {
  return apiFetch("/products");
}

export function createProduct(data: Partial<Product>) {
  return apiFetch("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
