import { UserResponse } from '@/types/user';

export async function apiFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const res = await fetch(input, {
    ...init,
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export const userApi = {
  info: () => apiFetch<UserResponse>('/api/user'),
};
