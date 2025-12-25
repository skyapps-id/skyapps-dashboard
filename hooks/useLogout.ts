"use client";

import { useState } from "react";
import { logoutApi } from "@/lib/api/auth";

export function useLogout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      await logoutApi();
    } catch (err: any) {
      setError(err.message || "Logout failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    logout,
    loading,
    error,
  };
}
