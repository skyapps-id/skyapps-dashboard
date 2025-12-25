import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const res = await fetch("https://skyapps.id/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();

  if (!res.ok || !result.success) {
    return NextResponse.json(
      { message: result.message || "Login failed" },
      { status: res.status || 401 }
    );
  }

  const { token, refresh_token, ...user } = result.data;

  const response = NextResponse.json({
    success: true,
    user,
  });

  // 🔐 Access Token
  response.cookies.set({
    name: "access_token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60, // 1 jam (sesuaikan exp JWT)
  });

  // 🔁 Refresh Token
  response.cookies.set({
    name: "refresh_token",
    value: refresh_token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
  });

  return response;
}
