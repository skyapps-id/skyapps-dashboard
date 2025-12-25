"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "@/services/product.service";

export function useCreateProduct() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
