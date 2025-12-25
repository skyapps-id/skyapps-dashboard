import { NextRequest, NextResponse } from 'next/server';

export async function httpClient(req: NextRequest, url: string, options: RequestInit = {}) {
  let accessToken = req.cookies.get('access_token')?.value;
  const refreshToken = req.cookies.get('refresh_token')?.value;

  if (!accessToken && !refreshToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const doFetch = async (token: string) => {
    return fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${token}`,
        ...(options.headers || {}),
      },
    });
  };

  let response = await doFetch(accessToken!);

  if (response.status === 401 && refreshToken) {
    const refreshRes = await fetch(`${req.nextUrl.origin}/api/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!refreshRes.ok) {
      return NextResponse.json({ error: 'Unauthorized, refresh failed' }, { status: 401 });
    }

    const refreshData = await refreshRes.json();
    const newAccessToken = refreshData.user.token;

    response = await doFetch(newAccessToken);
    return NextResponse.json(await response.json());
  }

  const data = await response.json();
  return NextResponse.json(data);
}
