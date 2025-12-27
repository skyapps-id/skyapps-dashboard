import Cookies from "js-cookie";

const API_BASE_URL = "https://skyapps.id/api";
const isProd = process.env.NODE_ENV === "production";

let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;

async function refreshToken(): Promise<void> {
  if (isRefreshing && refreshPromise) {
    return refreshPromise;
  }

  isRefreshing = true;
  const refreshToken = Cookies.get("refresh_token");

  refreshPromise = fetch("/api/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  })
    .then(async (res) => {
      if (!res.ok) {
        throw new Error("Refresh failed");
      }
    })
    .finally(() => {
      isRefreshing = false;
      refreshPromise = null;
    });

  return refreshPromise;
}

export async function httpClient<T>(
  input: string,
  init: RequestInit = {}
): Promise<T> {
  const doFetch = async () => {
    const token = Cookies.get("access_token");

    return fetch(`${API_BASE_URL}${input}`, {
      ...init,
      ...(isProd && { credentials: "include" }),
      headers: {
        ...(init.headers || {}),
        ...(token && { Authorization: `Bearer ${token}` }),
        "Content-Type": "application/json",
      },
    });
  };

  let res = await doFetch();

  if (res.status === 401) {
    try {
      await refreshToken();
      res = await doFetch();
    } catch {
      Cookies.remove("access_token");
      throw new Error("Session expired, please login again");
    }
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}
