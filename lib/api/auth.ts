export async function loginApi(email: string, password: string) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Login failed");
  }

  return res.json();
}

export async function getMe() {
  const res = await fetch("/api/auth/me");

  if (!res.ok) return null;
  return res.json();
}

export async function logoutApi() {
  await fetch("/api/auth/logout", {
    method: "POST",
  });
}
