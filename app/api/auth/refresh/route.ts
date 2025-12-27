import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { refreshToken } = await req.json();

  if (!refreshToken) {
    return NextResponse.json({ success: false, message: "No refresh token" }, { status: 401 });
  }

  const BASE_URL = process.env.BACKEND_BASE_URL;
  const res = await fetch(`${BASE_URL}/users/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  const result = await res.json();

  if (!res.ok || !result.success) {
    return NextResponse.json({ success: false, message: "Refresh failed" }, { status: 401 });
  }
  const { token, refresh_token, ...user } = result.data;

  const response = NextResponse.json({
    success: true,
    user,
  });

  const isProd = process.env.NODE_ENV === "production";

  // 🔐 Access Token
  response.cookies.set({
    name: "access_token",
    value: token,
    httpOnly: isProd,
    secure: isProd,
    sameSite: isProd ? "strict" : "lax",
    path: "/",
    maxAge: 60 * 60, // 1 jam (sesuaikan exp JWT)
  });

  // 🔁 Refresh Token
  response.cookies.set({
    name: "refresh_token",
    value: refresh_token,
    httpOnly: isProd,
    secure: isProd,
    sameSite: isProd ? "strict" : "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
  });

  return response;
}
