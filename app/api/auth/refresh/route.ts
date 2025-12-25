import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const refreshCookie = cookieStore.get("refresh_token");
  const refreshToken = refreshCookie?.value;

  if (!refreshToken) {
    return NextResponse.json({ success: false, message: "No refresh token" }, { status: 401 });
  }

  const BASE_URL = process.env.BACKEND_BASE_URL;
  const res = await fetch(`${BASE_URL}/users/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    return NextResponse.json({ success: false, message: "Refresh failed" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true, user: data.data });

  response.cookies.set({
    name: "access_token",
    value: data.data.token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  });

  response.cookies.set({
    name: "refresh_token",
    value: data.data.refresh_token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });

  return response;
}
